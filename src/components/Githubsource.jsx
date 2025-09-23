import { Github } from "lucide-react";

export default function GithubSource({ source, text, className = "", title }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-2xl shadow-md border bg-white ${className}`}
    >
      <div className="flex flex-col">
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-blue-600 hover:underline"
        >
          {title}
        </a>
        {text && <p className="text-sm text-gray-600 mt-1">{text}</p>}
      </div>

      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 text-gray-700 hover:text-black"
      >
        <Github size={28} />
      </a>
    </div>
  );
}
