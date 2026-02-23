import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SocialLink {
    icon: IconType;
    link: string;
}

interface TeamMember {
    name: string;
    position: string;
    bio: string;
    photo?: string;
    social: SocialLink[];
}

const socialTeam: TeamMember[] = [
    {
        name: "Omari Kayumba",
        position: "CEO & Co-Founder",
        bio: "Visionnaire technologique passionné par l'innovation et le développement de solutions digitales transformantes.",
        social: [
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/omari-kayumba-2973a420b/" },
            { icon: FaGithub, link: "https://github.com/Rimao416" },
            { icon: FaTwitter, link: "https://twitter.com/rimao416" }
        ]
    },
    {
        name: "David Banitongwa",
        position: "CTO & Co-Founder",
        bio: "Expert en développement fullstack avec une passion pour l'architecture cloud et les technologies émergentes.",
        social: [
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/david-banitongwa/" },
            { icon: FaGithub, link: "https://github.com/Banitongwa7" },
            { icon: FaTwitter, link: "https://twitter.com/BanitongwaDavid" }
        ]
    }
];

const Links = {
    meeting: "https://outlook.office.com/book/RendezvousaveclquipeDocovery@docovery.net/s/uZU__XDEa0qnbcmwokDrZg2?ismsaljsauthenabled"
}

const contactDocovery = {
    email: "contact@docovery.net",
    phone: {
        label: "+243 81 072 6861",
        value: "+243810726861"
    }
}

export { socialTeam, Links, contactDocovery };