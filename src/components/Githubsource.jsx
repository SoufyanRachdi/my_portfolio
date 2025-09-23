import { useState } from "react";
import { Github } from "lucide-react";

export default function GithubSource({ source, text, className = "", title, photos = [] }) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-5 rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {/* Title and GitHub icon */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <Github className="text-gray-500 group-hover:text-gray-800 transition-colors" size={26} />
      </div>

      {/* Description */}
      {text && <p className="text-sm text-gray-600 mt-2">{text}</p>}

      {/* Bottom-right small photo */}
      {photos.length > 0 && (
        <div className="mt-3 flex justify-end">
          <img
            src={photos[0]}
            alt="preview"
            className="w-12 h-12 object-cover rounded-md cursor-pointer border border-gray-300 hover:ring-2 hover:ring-blue-500 transition"
            onClick={(e) => {
              e.preventDefault(); // prevent navigating to GitHub link
              setShowGallery(!showGallery);
            }}
          />
        </div>
      )}

      {/* Gallery */}
      {showGallery && (
        <div className="mt-3 flex gap-2 overflow-x-auto py-2">
          {photos.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt={`photo-${idx}`}
              className="w-20 h-20 object-cover rounded-md border border-gray-300"
            />
          ))}
        </div>
      )}
    </a>
  );
}
