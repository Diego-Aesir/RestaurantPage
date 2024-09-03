import { homeLayout} from "./home-page/home-loader.js";
import { menuLayout } from "./menu-page/menu-loader.js";
import { contactLayout } from "./contact-page/contact-loader.js";
import "./styles.css";

const nav = document.querySelector("nav"); 
const content = document.querySelector("#content");

const button_home = document.createElement("button");
button_home.innerText = "Home";
button_home.addEventListener("click", homeLayout);

const button_menu = document.createElement("button");
button_menu.innerText = "Menu";
button_menu.addEventListener("click", menuLayout);

const button_contact = document.createElement("button");
button_contact.innerText = "Contact";
button_contact.addEventListener("click", contactLayout);

nav.appendChild(button_home);
nav.appendChild(button_menu);
nav.appendChild(button_contact);


