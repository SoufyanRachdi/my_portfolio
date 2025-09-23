import { useState, useMemo } from "react";
import { Github } from "lucide-react";

export default function GithubSource({ source, text, className = "", title, photos = [] }) {
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0); // thumbnail index
  const [selectedPhoto, setSelectedPhoto] = useState(null); // modal photo
  const [hasClickedThumbnail, setHasClickedThumbnail] = useState(false); // track first click

  const resolvedPhotos = useMemo(() => {
    if (typeof photos === "string") {
      return Array.from({ length: 5 }).map((_, i) => `/${photos}/${i + 1}.png`);
    }
    return photos;
  }, [photos]);

  const openModal = (index = currentThumbnailIndex) => {
    setSelectedPhoto(resolvedPhotos[index]);
  };

  const handleThumbnailClick = (e) => {
    e.preventDefault();
    if (!hasClickedThumbnail) {
      // First click: cycle to next image in bottom-right
      setCurrentThumbnailIndex((currentThumbnailIndex + 1) % resolvedPhotos.length);
      setHasClickedThumbnail(true);
    } else {
      // After first click: open modal
      openModal();
    }
  };

  const prevPhoto = () => {
    const newIndex = (resolvedPhotos.indexOf(selectedPhoto) - 1 + resolvedPhotos.length) % resolvedPhotos.length;
    setSelectedPhoto(resolvedPhotos[newIndex]);
  };

  const nextPhoto = () => {
    const newIndex = (resolvedPhotos.indexOf(selectedPhoto) + 1) % resolvedPhotos.length;
    setSelectedPhoto(resolvedPhotos[newIndex]);
  };

  return (
    <>
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
        {text && <div className="text-sm text-gray-600 mt-2">{text}</div>}

        {/* Bottom-right thumbnail */}
        {resolvedPhotos.length > 0 && (
          <div className="mt-3 flex justify-end">
            <img
              src={resolvedPhotos[currentThumbnailIndex]}
              alt="thumbnail"
              className="w-12 h-12 object-cover rounded-md cursor-pointer border border-gray-300 hover:ring-2 hover:ring-blue-500 transition"
              onClick={handleThumbnailClick}
            />
          </div>
        )}
      </a>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Exit button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-80 text-black text-4xl font-bold hover:bg-red-500 hover:text-white transition z-50"
            >
              &times;
            </button>

            {/* Navigation buttons */}
            {resolvedPhotos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-80 text-black text-2xl font-bold hover:bg-blue-500 hover:text-white transition z-50"
                >
                  ‹
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-80 text-black text-2xl font-bold hover:bg-blue-500 hover:text-white transition z-50"
                >
                  ›
                </button>
              </>
            )}

            <img
              src={selectedPhoto}
              alt="big-view"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
