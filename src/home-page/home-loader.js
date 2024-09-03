import "./home-style.css";
import restaurantMainRoom from "../image/restaurantRoom.jpg";
import pancake from "../image/pancake.jpg";
import cozyPlace from "../image/cozyPlace.jpg";
import lunch from "../image/lunch.jpg";


export function homeLayout() {
    const content = document.querySelector("#content");
    while(content.childElementCount != 0) {
        content.removeChild(content.firstChild);
    }
    const table = document.createElement("div");
    table.className = "divHomeTable";

    const restaurantName = document.createElement("h1");
    restaurantName.innerText = "Random Restaurant";

    const grid = document.createElement("div");
    grid.className = "divImage";

    const restaurantMainRoomImg = document.createElement("img");
    restaurantMainRoomImg.src = restaurantMainRoom;
    
    const pancakeImg = document.createElement("img");
    pancakeImg.src = pancake;

    const cozyPlaceImg = document.createElement("img");
    cozyPlaceImg.src = cozyPlace;

    const lunchImg = document.createElement("img");
    lunchImg.src = lunch;

    grid.appendChild(lunchImg);
    grid.appendChild(restaurantMainRoomImg);
    grid.appendChild(cozyPlaceImg);
    grid.appendChild(pancakeImg);   

    table.appendChild(restaurantName);
    table.appendChild(grid);

    content.appendChild(table);
}