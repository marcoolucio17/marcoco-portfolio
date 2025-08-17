import React from "react";
import { Mail, Github, Linkedin, Music, Play, Radio, Headphones, ExternalLink } from "lucide-react";

type IconType = "email" | "github" | "linkedin" | "spotify" | "portfolio" | "phone" | "twitter";

interface ContactLinkProps {
  type: IconType;
  address: string;
  url?: string;
}

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  spotify: Music, // or Play, Radio, Headphones
  portfolio: ExternalLink,
  phone: Mail, // You can import Phone icon
  twitter: Mail, // You can import Twitter icon if available
};

export const ContactLink: React.FC<ContactLinkProps> = ({
  type,
  address,
  url,
}) => {
  const IconComponent = iconMap[type];
  
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (type === 'email') {
      window.open(`mailto:${address}`, '_self');
    }
  };

  return (
    <button className="group cursor-pointer" onClick={handleClick}>
      <h3 className="font-mono flex items-center gap-3 border border-gray-200 dark:border-gray-700 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-red-100 dark:group-hover:from-blue-800/30 dark:group-hover:to-red-800/30">
        <IconComponent
          size={20}
          className="transition-transform duration-300 group-hover:scale-110 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
        />
        <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
          {address}
        </span>
      </h3>
    </button>
  );
};