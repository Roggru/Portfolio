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



const navItems = document.querySelectorAll('.p-nav');
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(item => item.classList.remove('active'));
            
            const activeNav = document.querySelector(`[data-section="${entry.target.id}"]`);
            if (activeNav) {
                activeNav.classList.add('active');
            }
        }
    });
}, options);
sections.forEach(section => observer.observe(section));

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});