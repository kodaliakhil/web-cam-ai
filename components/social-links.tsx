"use client";

import { Github, Linkedin } from "lucide-react";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <a
        href="https://github.com/kodaliakhil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/akhil-kodali/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
