function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/profile-3f0f3cd5-b275-4428-882f-070d3292a4e3-1664646248146 1.png"
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
