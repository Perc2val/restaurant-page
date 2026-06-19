import { deleteContent } from "./deleteContent";
import { renderMainPage } from "../content/mainContentJS";
import { renderAboutPage } from "../content/aboutContentJS";
import { renderMenuPage } from "../content/menuContentJS";


function createEventListener(){
    const homeButton = document.querySelector(".home");
    const menuButton = document.querySelector(".menu");
    const aboutButton = document.querySelector(".about");

    homeButton.addEventListener("click", ()=>{
        deleteContent();
        renderMainPage();
    })

    menuButton.addEventListener("click", ()=>{
        deleteContent();
        renderMenuPage();
    })
    
    aboutButton.addEventListener("click", ()=>{
        deleteContent();
        renderAboutPage();
    })
}

export {createEventListener,}