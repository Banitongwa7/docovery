import { metrics, capabilities } from "@/lib/company";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Counter from "@/components/motion/Counter";
import BackgroundVideo from "@/components/ui/BackgroundVideo";

export default function Metrics() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-panel bg-night px-6 py-14 text-white sm:px-12 sm:py-18">
          {/* Decorative data-flow footage, heavily dimmed behind the figures. */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <BackgroundVideo
              src="/media/data-loop.mp4"
              poster="/media/services-cloud.jpg"
              overlay={false}
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-night/55" />
          <div className="pointer-events-none absolute inset-0 grid-lines" />
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 size-[28rem] rounded-full blur-[120px]"
            style={{ background: "rgb(37 99 235 / 0.18)" }}
          />

          <div className="relative">
            <div className="max-w-2xl">
              <Reveal y={12} duration={0.6}>
                <span className="eyebrow text-white/45">Notre impact</span>
              </Reveal>
              <SplitHeading
                as="h2"
                trigger="scroll"
                className="display mt-5 text-[2rem] text-white sm:text-[2.75rem]"
              >
                Des résultats concrets, pas des promesses.
              </SplitHeading>
              <Reveal y={18} delay={0.1}>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/55">
                  Des chiffres qui démontrent notre engagement envers
                  l&apos;excellence et l&apos;innovation, mesurés à la clôture de
                  chaque mission.
                </p>
              </Reveal>
            </div>

            <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-night-line lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  data-anim
                  className="bg-night px-5 py-8 sm:px-7"
                >
                  <Counter
                    value={metric.value}
                    className="block text-[2.5rem] font-semibold tracking-[-0.04em] text-white tabular-nums sm:text-[3.25rem]"
                  />
                  <p className="mt-2 text-sm font-medium text-white">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/45">
                    {metric.caption}
                  </p>
                </div>
              ))}
            </Stagger>

            <Reveal
              y={16}
              delay={0.15}
              className="mt-8 flex flex-wrap gap-3"
            >
              {capabilities.map((capability) => (
                <span
                  key={capability.label}
                  className="inline-flex items-center gap-2 rounded-full border border-night-line px-4 py-2 text-xs text-white/60"
                >
                  <capability.icon className="size-3.5 text-accent" />
                  {capability.label}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
