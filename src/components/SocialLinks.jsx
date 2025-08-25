import React from "react";
import { Github, Instagram, ExternalLink } from "lucide-react";

const GmailIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 48 48"
  >
    <path fill="#EA4335" d="M24 24L4.5 12.1v23.8h9.2V25.5l10.3 6.6 10.3-6.6v10.4h9.2V12.1z"/>
    <path fill="#FBBC05" d="M43.5 12.1L24 24 4.5 12.1 24 0z"/>
    <path fill="#34A853" d="M19.5 31.6v5.9L24 42l4.5-4.5v-5.9L24 35.1z"/>
    <path fill="#4285F4" d="M14.5 37.5h19V25.5L24 32.1l-9.5-6.6z"/>
  </svg>
);

const socialLinks = [
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@belyabdelilah",
    icon: Instagram,
    url: "https://www.instagram.com/belyabdelilah/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@BELYAGOUBIABDELILAH",
    icon: Github,
    url: "https://github.com/BELYAGOUBIABDELILAH",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "Gmail",
    displayName: "Email",
    subText: "belyagoubiabdillah@gmail.com",
    icon: GmailIcon,
    url: "mailto:belyagoubiabdillah@gmail.com",
    color: "#EA4335",
    gradient: "from-[#EA4335] via-[#FBBC05] to-[#34A853]"
  }
];

const SocialLinks = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            {/* Hover Gradient */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                          bg-gradient-to-r ${link.gradient}`}
            />

            {/* Icon */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                           group-hover:scale-125 group-hover:opacity-30"
                style={{ backgroundColor: link.color }}
              />
              <div className="relative p-2 rounded-lg">
                <link.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-110"
                  style={{ color: link.color }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                {link.displayName}
              </span>
              <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                {link.subText}
              </span>
            </div>

            <ExternalLink
              className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         transform group-hover:translate-x-0 -translate-x-2"
            />

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
