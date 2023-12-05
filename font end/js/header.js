
//EVENT OPEN / CLOSE MENU
const navListMenu = document.getElementById("nav-list-menu");                                       
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");    
const productMobile = document.getElementById('product-mobile');
openMenu.addEventListener("click", () => {
    navListMenu.classList.toggle("show");
    productMobile.classList.add('show-text-mobile');
    
});
closeMenu.addEventListener("click", () => {
    navListMenu.classList.toggle("show");
    productMobile.classList.remove('show-text-mobile');
});
 
//OPEN / CLOSE SIDE BAR
function on__left() {
    document.getElementById("overlay-left").style.display = "block";
  }
  
  function off__left() {
    document.getElementById("overlay-left").style.display = "none";
    product.classList.remove("show");
    cosmetic.classList.remove("show");
    discount.classList.remove('show');
    productList.classList.remove('show-text')
    relatedList.classList.remove('show-text')
    ingredient.classList.remove('show-text');
    discountList.classList.remove('show-text');
    cosmeticList.classList.remove('show-text');
    groupSecondSidebar.classList.remove('show-second')
  }

  function on__right() {
    document.getElementById("overlay-right").style.display = "block";
  }
  
  function off__right() {
    document.getElementById("overlay-right").style.display = "none";
    search.classList.remove('show');
    searchInput.classList.remove('show-text');
    searchSuggest.classList.remove('show-text');
  }
// EVENT OPEN / CLOSE PRODUCT LIST: START
const product = document.getElementById('product');
const btnProduct = document.getElementById('btn-product');
const closeProduct = document.getElementById('close-product');
const productList = document.getElementById('product-list');
const relatedList = document.getElementById('related-list');
const ingredient = document.getElementById('ingredient');

btnProduct.addEventListener('click', () => {
    product.classList.add('show');
    cosmetic.classList.remove('show');
    discount.classList.remove('show');
    productList.classList.add('show-text')
    relatedList.classList.add('show-text')
    ingredient.classList.add('show-text');
});

closeProduct.addEventListener('click', () => {
    product.classList.remove('show');
    productList.classList.remove('show-text')
    relatedList.classList.remove('show-text')
    ingredient.classList.remove('show-text');
    overlayLeft.style.display = "none";
});

// EVENT OPEN / CLOSE SKINCARE LIST: START
const sideBarSecond = document.getElementsByClassName('group__second--sidebar');

function showContent(contentId) {
    var sideBarSecond = document.getElementsByClassName('group__second--sidebar');
    for (var i = 0; i < sideBarSecond.length; i++) {
      sideBarSecond[i].classList.remove('show-second');
    }

    var showSideBarSecond = document.getElementById(contentId);
    showSideBarSecond.classList.add('show-second');
    document.getElementById('overlay-sidebar').style.display = 'block';
}

//CLOSE SIDEBAR SECOND: START
function closeSidebar() {
    var closeSideBar = document.getElementsByClassName('group__close');
    for (var i = 0; i < closeSideBar.length; i++) {
        sideBarSecond[i].classList.remove('show-second');
}
document.getElementById("overlay-sidebar").style.display = "none";
}

function hideOverlay() {
var sideBarSecond = document.getElementsByClassName('group__second--sidebar');
for (var i = 0; i < sideBarSecond.length; i++) {
    sideBarSecond[i].classList.remove('show-second');
}
document.getElementById("overlay-sidebar").style.display = "none";
document.getElementById("overlay-left").style.display = "none";
product.classList.remove('show');
}

//CLOSE SIDEBAR SECOND: END
// EVENT OPEN / CLOSE PRODUCT LIST: END

//EVENT OPEN / CLOSE DISCOUNT
const discount = document.getElementById('discount');
const btnDiscount = document.getElementById('btn-discount');
const closeDiscount = document.getElementById('close-discount');
const discountList = document.getElementById('discount-list');

btnDiscount.addEventListener("click", () =>{
    discount.classList.add("show");
    product.classList.remove('show');
    cosmetic.classList.remove('show');
    discountList.classList.add('show-text')
});

closeDiscount.addEventListener("click", () =>{
    discount.classList.toggle("show");
    discountList.classList.remove('show-text')
    overlayLeft.style.display = "none";
});

//EVENT OPEN / CLOSE COSMETIC
const cosmetic = document.getElementById('cosmetic');
const btnCosmetic = document.getElementById('btn-cosmetic');
const closeCosmetic = document.getElementById('close-cosmetic');
const cosmeticList = document.getElementById('cosmetic-list');

btnCosmetic.addEventListener("click", () =>{
    cosmetic.classList.add("show");
    cosmeticList.classList.add('show-text')
    product.classList.remove('show');
    discount.classList.remove('show');
})

closeCosmetic.addEventListener("click", () =>{
    cosmetic.classList.toggle("show");
    cosmeticList.classList.remove('show-text')
    overlayLeft.style.display = "none";
});

// EVENT SEARCH
const search = document.getElementById('search');
const btnSearch = document.getElementById('btn-search');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-input');
const searchSuggest = document.getElementById('search-suggest');
btnSearch.addEventListener("click", () =>{
    search.classList.add("show");
    searchInput.classList.add('show-text');
    searchSuggest.classList.add('show-text');
})

closeSearch.addEventListener("click", () =>{
    search.classList.toggle('show');
    searchInput.classList.remove('show-text');
    searchSuggest.classList.remove('show-text');
    overlayRight.style.display = "none";
});
// MENU MOBILE: START 
const btnProductMobile = document.getElementById("btn-product-mobile");
const productListMobile = document.getElementById("product-list-mobile");
btnProductMobile.addEventListener('click', () => {
    productListMobile.classList.toggle('show-mobile')
});

const btnMobileCosmetic = document.getElementById("btn-product-related");
const productRelatedMobile = document.getElementById("product-related-mobile");
btnMobileCosmetic.addEventListener('click', () => {
    productRelatedMobile.classList.toggle('show-mobile')
})

//MENU MOBILE: END





