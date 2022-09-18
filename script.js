console.log("Hey, KB");
function cor() {
  /*  let elemento=document.createElement("h1");
         elemento.textContent="Escolheste a sua cor predilecta";
          elemento.setAttribute("class", "titulo");
          elemento.setAttribute("style", "color: black");
          document.body.appendChild(elemento); */

  let everyColor = [1];

  let word = document.querySelector(".word");//Pega o h1 no html
  let color = document.querySelector(".col").value;//Coloca a cor no campo input do type color
  let body = document.getElementsByTagName('body')[0]; body.style.backgroundColor = color;//Dá a cor ao background, levada do input

  word.setAttribute("class", "word");//defina a class que nao ira se criar no CSS
  word.setAttribute("style", "color: aqua");//Dou o estilo
  word.innerHTML = "A cor escolhida foi" + " " + color;//Atribui o texto ao JS

  for (let i = 0; i < color.length; i++) {
    everyColor[1] = color;
    if (color === everyColor[i]) {
      word.setAttribute("style", "color: green");
      console.log(333);
    } else if (color === "#14a939" || color === "#1ee650" || color === "##1b7933" || color === "#0e5d22" || color === "#04200b" || color === "#469158" || color === "#05ff3f" || color === "#318825" || color === "#257441") {
      word.setAttribute("style", "color: #000000");
    }
  }
  /*  if(elemento.style.color==body.style.backgroundColor[i]){
  .log(                     elemento.style.backgroundColor=elemento.style.backgroundColor[i+1]);
  } */
}