import React from "react";
import "tailwindcss/tailwind.css";

const links = [
  { title: "Link 1", url: "https://example.com/link-1" },
  { title: "Link 2", url: "https://example.com/link-2" },
  { title: "Link 3", url: "https://example.com/link-3" },
  { title: "Link 4", url: "https://example.com/link-4" },
];

const Linktree = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {links.map((link) => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors duration-300"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Linktree;
