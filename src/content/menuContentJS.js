
function renderMenuPage(){
    const divContent = document.querySelector("#content");
    const itemOne = document.createElement("div");
        const titleOne = document.createElement("h4")
        const descriptionOne = document.createElement("p")
        const priceOne = document.createElement("p")
    const itemTwo = document.createElement("div");
        const titleTwo = document.createElement("h4")
        const descriptionTwo = document.createElement("p")
        const priceTwo = document.createElement("p")
    const itemThree = document.createElement("div");
        const titleThree = document.createElement("h4")
        const descriptionThree = document.createElement("p")
        const priceThree = document.createElement("p")

    divContent.classList.remove("contentAbout")
    divContent.classList.remove("contentHome")
    divContent.classList.add("contentMenu");

    divContent.appendChild(itemOne);
        itemOne.appendChild(titleOne);
        itemOne.appendChild(descriptionOne);
        itemOne.appendChild(priceOne);
    divContent.appendChild(itemTwo);
        itemTwo.appendChild(titleTwo);
        itemTwo.appendChild(descriptionTwo);
        itemTwo.appendChild(priceTwo);
    divContent.appendChild(itemThree);
        itemThree.appendChild(titleThree);
        itemThree.appendChild(descriptionThree);
        itemThree.appendChild(priceThree);


    titleOne.textContent = "Food One";
    titleTwo.textContent = "Food Two";
    titleThree.textContent = "Food Three";

    descriptionOne.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat reprehenderit dolorem voluptatibus numquam incidunt";
    descriptionTwo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat reprehenderit dolorem voluptatibus numquam incidunt";
    descriptionThree.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat reprehenderit dolorem voluptatibus numquam incidunt";

    priceOne.textContent = "19.99";
    priceTwo.textContent = "15.99";
    priceThree.textContent = "8.99";


}

export {renderMenuPage,}