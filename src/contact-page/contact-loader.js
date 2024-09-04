import "./contact-style.css";
import map from "../image/map.jpg";

export function contactLayout() {
    const content = document.querySelector("#content");
    while(content.childElementCount != 0) {
        content.removeChild(content.firstChild);
    }
    const table = document.createElement("div");
    table.className = "divContactTable";

    const visitTxt = document.createElement("h1");
    visitTxt.innerText = "Come visit us";

    const mapDiv = document.createElement("img");
    mapDiv.src = map;
    mapDiv.addEventListener("click", () => {
        window.open("https://maps.app.goo.gl/CNGa5yEwA8fUEQQy7", "_blank");
    });
    mapDiv.style.cursor = 'pointer';

    const numberTxt = document.createElement("h1");
    numberTxt.innerText = "Or call us (XX) XXXX-XXXX";

    table.appendChild(visitTxt);
    table.appendChild(mapDiv);
    table.appendChild(numberTxt);

    content.appendChild(table);    
}