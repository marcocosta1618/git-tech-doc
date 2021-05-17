// selectors:
const burger = document.querySelector('button.burger');   // hamburger menu button
const navbar = document.querySelector('#navbar');         // nav (contains header, hamburger and index)
const index = document.querySelector('ul#index');         // index
const navLink = document.querySelectorAll('ul#index a');  // index links (NodeList)

// toggle elements' visibility (toggle 'clicked' class)...
const toggleVisibility = () => {
    if (window.innerWidth <= 992) {
        burger.classList.toggle('clicked');
        navbar.classList.toggle('clicked');
        index.classList.toggle('clicked');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // ...on hamburger menu click:
    burger.addEventListener('click', () => {
        toggleVisibility();
    })
    // ...and on index's links clicks:
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            toggleVisibility();
        })
    })
})
