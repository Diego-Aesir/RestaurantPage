import { homeLayout} from "./home-page/home-loader.js";
import "./styles.css";

const nav = document.querySelector("nav"); 
const content = document.querySelector("#content");

const button_home = document.createElement("button");
button_home.innerText = "Home";
button_home.addEventListener("click", homeLayout);

const button_menu = document.createElement("button");
button_menu.innerText = "Menu";

const button_contact = document.createElement("button");
button_contact.innerText = "Contact";




nav.appendChild(button_home);
nav.appendChild(button_menu);
nav.appendChild(button_contact);





//Basicamente, a cada click, Home-Menu-Contact vai criar uma div e sera inserido la naquele content
// Vai ter que ficar atualizando a parada e colocando a propria view.
// Imagino que cada um tera seu css como padrao

