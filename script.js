function toggleMode() {
  const html = document.documentElement
  const image = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    image.setAttribute("src", "./assets/avatar-dark.png")
  }
  if (html.classList.contains("light")) {
    image.setAttribute("alt", "Foto de Lorena programadora com óculos de sol.")
  } else {
    image.setAttribute("alt", "Foto de Lorena programadora.")
  }
}
/* 

=

html.classList.toggle('light)
*/
