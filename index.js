const containerIdent = document.querySelector(".overlay");
const list = ["artist", "writer", "poet", "freelancer", "designer", "developer"];

let listIndex = 0
let characterIndex = 0
let change = false;
updateIdent(); 

function updateIdent(){
    if (change) {
        characterIndex--;}
    else {
        characterIndex++;}
    
    containerIdent.innerHTML = `<h1>${list[listIndex].slice(0, characterIndex)} </h1>`;
    
    if (characterIndex === list[listIndex].length) {
        change = true;
        setTimeout(updateIdent, 1500);
        return;}

    if (characterIndex === 0 && change) {
        change = false;
        listIndex++;
        
        if (listIndex === list.length) {
            listIndex = 0;
        }
        setTimeout(updateIdent, 800);
        return;
    }
    setTimeout(updateIdent, change ? 80 : 150);
}