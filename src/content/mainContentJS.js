
import restaurantImg from "../pictures/restaurant.png"


const renderMainPage = function() {
    const divContent = document.querySelector("#content")
    const divMainContent = document.createElement("div");
    const divMainContentLeft = document.createElement("div");
    const h3 = document.createElement("h3");
    const menuButton = document.createElement("button");
    const p = document.createElement("p");
    const img = document.createElement("img");

    img.src = restaurantImg;

    
    divContent.appendChild(divMainContent);
    divContent.appendChild(img)
    divMainContent.appendChild(divMainContentLeft);
    divMainContentLeft.appendChild(h3);
    divMainContentLeft.appendChild(menuButton);
    divMainContentLeft.appendChild(p);

    divMainContent.classList.add("mainContent");
    divContent.classList.remove("contentAbout");
    divContent.classList.add("contentMain");
    divContent.classList.remove("contentMenu");
    divMainContentLeft.classList.add("left");
    img.classList.add("mainPicture");
    menuButton.classList.add("menu")
    

    h3.textContent = "This is my Restaurant";
    menuButton.textContent = "Take a look";
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat reprehenderit dolorem voluptatibus numquam incidunt ipsum saepe, perspiciatis suscipit provident minima soluta praesentium illum amet quas necessitatibus placeat labore unde."

};

export {renderMainPage, }