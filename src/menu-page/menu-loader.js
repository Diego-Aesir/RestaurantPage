import "./menu-style.css";
import pandaEating from "../image/gottaeattogetfit.jpg";

export function menuLayout() {
    const content = document.querySelector("#content");
    while(content.childElementCount != 0) {
        content.removeChild(content.firstChild);
    }
    const table = document.createElement("div");
    table.className = "divMenuTable";

    const h1 = document.createElement("h1");
    h1.innerText = "Menu";

    const grid = document.createElement("div");
    grid.style.display = "flex";
    grid.style.flexDirection = "row";
    grid.style.justifyContent = "self";
    grid.style.justifyContent = "space-between";
    
    const foodGrid = document.createElement("div");
    foodGrid.style.marginLeft = "30px";

    const drinkGrid = document.createElement("div");
    drinkGrid.style.marginRight = "30px";

    const foodHeader = document.createElement("h1");
    foodHeader.innerText = "Food";

    let firstFood = document.createElement("p");
    firstFood.innerText = "Pancakes";

    let secondFood = document.createElement("p");
    secondFood.innerText = "Waffle";

    let thirdFood = document.createElement("p");
    thirdFood.innerText = "Pao de queijo";

    let fourthFood = document.createElement("p");
    fourthFood.innerText = "Cuzcuz";

    let fifthFood = document.createElement("p");
    fifthFood.innerText = "Tapioca";

    const drinkHeader = document.createElement("h1");
    drinkHeader.innerText = "Drinks";

    let firstDrink = document.createElement("p");
    firstDrink.innerText = "Cafe preto";

    let secondDrink = document.createElement("p");
    secondDrink.innerText = "Cafe com Leite";

    let thirdDrink = document.createElement("p");
    thirdDrink.innerText = "Cappuccino"

    let fourthDrink = document.createElement("p");
    fourthDrink.innerText = "Nescau"

    let fifthDrink = document.createElement("p");
    fifthDrink.innerText = "Sucos";

    const image = document.createElement("img");
    image.src = pandaEating;

    foodGrid.appendChild(foodHeader);
    foodGrid.appendChild(firstFood);
    foodGrid.appendChild(secondFood);
    foodGrid.appendChild(thirdFood);
    foodGrid.appendChild(fourthFood);
    foodGrid.appendChild(fifthFood);

    drinkGrid.appendChild(drinkHeader);
    drinkGrid.appendChild(firstDrink);
    drinkGrid.appendChild(secondDrink);
    drinkGrid.appendChild(thirdDrink);
    drinkGrid.appendChild(fourthDrink);
    drinkGrid.appendChild(fifthDrink);

    grid.appendChild(foodGrid);
    grid.appendChild(drinkGrid);
        
    table.appendChild(h1);
    table.appendChild(grid);
    table.appendChild(image);

    content.appendChild(table);
}