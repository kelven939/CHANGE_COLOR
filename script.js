console.log("Hey, KB");
function cor() {
  /*  let elemento=document.createElement("h1");
         elemento.textContent="Escolheste a sua cor predilecta";
          elemento.setAttribute("class", "titulo");
          elemento.setAttribute("style", "color: black");
          document.body.appendChild(elemento); */

  let everyColor = [1];
  let greenColors = ['#05ad2f', '#0cdf41', '#00ff40']

  let word = document.querySelector(".word");//Pega o h1 no html
  let color = document.querySelector(".col").value;//Coloca a cor no campo input do type color
  let body = document.getElementsByTagName('body')[0]; body.style.backgroundColor = color;//Dá a cor ao background, levada do input

  word.setAttribute("class", "word");//defina a class que nao ira se criar no CSS
  word.setAttribute("style", "color: aqua");//Dou o estilo
  word.innerHTML = "A cor escolhida foi" + " " + color;//Atribui o texto ao JS

  for (let i = 0; i < color.length; i++) {
    everyColor[1] = color;
    //for (let j = 0; j < greenColors.length; j++) {
    //greenColors[j];
    //console.log(greenColors[j]);
    if (color === everyColor[i]) {
      word.setAttribute("style", "color: green");
      console.log(333);
    } //else if (color === greenColors[j]) {
    //  word.setAttribute("style", "color: black");
    //}
    for (let j = 0; j < greenColors.length; j++) {
      console.log(greenColors[j]);
      if (color === greenColors[j]) {
        word.setAttribute("style", "color: black");
      }
    }
    //}
  }
  /*  if(elemento.style.color==body.style.backgroundColor[i]){
  .log(                     elemento.style.backgroundColor=elemento.style.backgroundColor[i+1]);
  } */
}