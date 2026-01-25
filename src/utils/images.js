
export const restaurantProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/restaurant/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);


export const zombieGameprojectImages = Object.values(
  import.meta.glob("/public/projectsimages/zombiegame/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);
export const triangleGameprojectImages = Object.values(
  import.meta.glob("/public/projectsimages/trianglegame/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);
export const kabaadhubappprojectImages = Object.values(
  import.meta.glob("/public/projectsimages/kabaadhub/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);

export const car4craProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/car4cra/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);

export const mkarchiProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/mkarchi/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);

export const mkarchiDesktopProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/mkarchi_desktop/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);

export const mkarchiWebProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/mkarchi_web/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);

export const soyfmusicProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/soyfmusic/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);

export const soyftubeProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/soyftube/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);

export const lawyerAppProjectImages = Object.values(
  import.meta.glob("/public/projectsimages/laywer app/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);