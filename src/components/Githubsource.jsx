import { Github } from "lucide-react";

export default function GithubSource({ source, text, className = "", title }) {
  return (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-5 rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <Github className="text-gray-500 group-hover:text-gray-800 transition-colors" size={26} />
      </div>
      {text && <p className="text-sm text-gray-600 mt-2">{text}</p>}
    </a>
  );
}

