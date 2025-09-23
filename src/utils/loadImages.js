
export function loadImages(folderPath) {
  const images = import.meta.glob(`/public/${folderPath}/*.{png,jpg,jpeg,svg}`, { eager: true });

  return Object.values(images).map((m) => m.default);
}
