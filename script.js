function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute("alt", "Foto de Leone sorrindo de camisa social cinza")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Leone sorrindo usando óculos e camisa social cinza"
    )
  }
}
