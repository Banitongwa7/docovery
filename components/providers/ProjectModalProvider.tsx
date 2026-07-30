"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ProjectRequestModal from "@/components/forms/ProjectRequestModal";

type ProjectModalContextValue = {
  /** Opens the request modal, optionally pre-selecting a service. */
  openProjectModal: (service?: string) => void;
};

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null);

/**
 * One modal instance for the whole app — every "Démarrer un projet" button
 * anywhere in the tree opens the same dialog instead of mounting its own.
 */
export function ProjectModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const openProjectModal = useCallback((preSelected = "") => {
    setService(preSelected);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openProjectModal }), [openProjectModal]);

  return (
    <ProjectModalContext.Provider value={value}>
      {children}
      <ProjectRequestModal
        // Remounting on service change resets the form to the new default.
        key={service}
        open={open}
        preSelectedService={service}
        onClose={() => setOpen(false)}
      />
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const context = useContext(ProjectModalContext);
  if (!context) {
    throw new Error(
      "useProjectModal must be used inside <ProjectModalProvider>",
    );
  }
  return context;
}
