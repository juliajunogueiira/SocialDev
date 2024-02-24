function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/IMG_20240123_180631_313 1.jpg"
    )
    img.setAttribute(
      "alt",
      "Foto da Julia Nogueira sorrindo, pele negra com cabelo cachedo e fundo rosa."
    )
  } else {
    img.setAttribute("src", "./assets/julia 1.png")
    img.setAttribute(
      "alt",
      "Foto da Julia Nogueira sorrindo, pele negra com cabelo cachedo e fundo rosa."
    )
  }
}
