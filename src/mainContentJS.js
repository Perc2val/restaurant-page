import restaurantImg from "./pictures/restaurant.png"


const renderMainPage = function() {
    const divContent = document.querySelector(".content")
    const divMainContent = document.createElement("div");
    const divMainContentLeft = document.createElement("div");
    const h3 = document.createElement("h3");
    const buttonMenu = document.createElement("button");
    const p = document.createElement("p");
    const img = document.createElement("img");

    img.src = restaurantImg;

    
    divContent.appendChild(divMainContent);
    divContent.appendChild(img)
    divMainContent.appendChild(divMainContentLeft);
    divMainContentLeft.appendChild(h3);
    divMainContentLeft.appendChild(buttonMenu);
    divMainContentLeft.appendChild(p);

    divMainContent.classList.add("mainContent");
    divMainContentLeft.classList.add("left");
    img.classList.add("mainPicture");
    

    h3.textContent = "This is my Restaurant";
    buttonMenu.textContent = "Take a look";
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat reprehenderit dolorem voluptatibus numquam incidunt ipsum saepe, perspiciatis suscipit provident minima soluta praesentium illum amet quas necessitatibus placeat labore unde."

};

export {renderMainPage, }