
export const restaurantProjectImages = Object.values(
  import.meta.glob("/public/restaurantproject/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);


export const zombieGameprojectImages = Object.values(
  import.meta.glob("/public/zombiegameproject/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);
export const triangleGameprojectImages = Object.values(
  import.meta.glob("/public/trianglegameproject/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);
export const kabaadhubappprojectImages = Object.values(
  import.meta.glob("/public/kabaadhubappproject/*.{png,jpg,jpeg,svg}", { eager: true })
).map((m) => m.default);