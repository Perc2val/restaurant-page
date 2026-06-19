
function deleteContent(){
    const divContent = document.querySelector("#content");
    while(divContent.firstChild){
        divContent.removeChild(divContent.lastChild);
    }
}










export {deleteContent,}