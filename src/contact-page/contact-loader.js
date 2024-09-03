import "./contact-style.css";

export function contactLayout() {
    const content = document.querySelector("#content");
    while(content.childElementCount != 0) {
        content.removeChild(content.firstChild);
    }
    const table = document.createElement("div");
    table.className = "divContactTable";

    content.appendChild(table);
}