var texto = new Typed(".texto-multiplo",{
    strings: ["Engenheiro de computação"],
    typeSepeed: 1,
    backSepeed: 10,
    backDelay: 1000,
    
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
console.log(sections)
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

            if(top >= offset && top < offset + heigth) {
                navLinks.forEach(links => {
                    links.classList.remove('ativo');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo');
                });
            };
        }); 
        
        navbar.classList.remove('bx-menu')
        navbar.classList.remove('active')

    };
    

let menuicone  = document.querySelector('#icone-menu')  
let navbar  = document.querySelector('.navbar')  

menuicone.onclick = () => {

    navbar.classList.toggle('active')
}
