

function renderAboutPage(){
    const divContent = document.querySelector("#content")
    const divTop = document.createElement("div");
    const aboutTitle = document.createElement("h3");
    const p = document.createElement("p");
    const divBottom = document.createElement("div");
    const ul = document.createElement("ul")
    const liOne = document.createElement("li");
    const liTwo = document.createElement("li");
    const liThree = document.createElement("li");

    divContent.classList.add("contentAbout")
    divContent.classList.remove("contentHome")
    divContent.classList.remove("contentMenu");

    

    divContent.appendChild(divTop);
        divTop.appendChild(aboutTitle);
        divTop.appendChild(p);
    divContent.appendChild(divBottom);
        divBottom.appendChild(ul);
            ul.appendChild(liOne);
            ul.appendChild(liTwo);
            ul.appendChild(liThree);
    
    aboutTitle.textContent = "About"
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat reprehenderit dolorem voluptatibus numquam incidunt ipsum saepe, perspiciatis suscipit provident minima soluta praesentium illum amet quas necessitatibus placeat labore unde."

    liOne.textContent = "10435 Berlin"
    liTwo.textContent = "0123456789"
    liThree.textContent = "mail@gmail.com"
}

export {renderAboutPage,}