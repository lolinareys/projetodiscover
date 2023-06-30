function toggleMode() {
  const html = document.documentElement
  const image = document.querySelector("#profile img")
  const theme = html.dataset.theme === "light" ? "dark" : "light"

  let altProfileImg = "Foto de Lorena programadora" 
  if (theme === "light") {
    altProfileImg += " com óculos de sol"
  }
  
  image.setAttribute("src", `./assets/avatar-${theme}.png`)
  image.setAttribute("alt", altProfileImg)

  html.dataset.theme = theme
}