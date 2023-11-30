// EVENT OPEN / CLOSE MENU
const navMenu = document.getElementById("nav-menu");                                       
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");    

openMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show__menu");
});
closeMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show__menu");
});

// EVENT OPEN / CLOSE PRODUCT LIST
const product = document.getElementById('product');
const btnProduct = document.getElementById('btn-product');
const closeProduct = document.getElementById('close-product');

btnProduct.addEventListener('click', () => {
    product.classList.toggle('show__product')
});

closeProduct.addEventListener('click', () => {
    product.classList.toggle('show__product')
});
