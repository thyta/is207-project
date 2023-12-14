const overlayLeft = document.getElementById('overlay-left');
const overlayRight = document.getElementById('overlay-right');
const overlaySidebar = document.getElementById('overlay-sidebar');

// EVENT OPEN / CLOSE PRODUCT: START
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

// EVENT OPEN SIDEBAR SECOND: START
const middleSidebar = document.getElementById('middle-sidebar');
const groupSecondContent = document.getElementsByClassName('group__second--content');
function showContent(contentId) {
    for (var i = 0; i < groupSecondContent.length; i++) {
      groupSecondContent[i].classList.remove('show-text');
      groupSecondContent[i].style.display = 'none';
    }

    middleSidebar.classList.add('show-second');
    var showContentSideBarSecond = document.getElementById(contentId);
    showContentSideBarSecond.style.display = 'block';
    showContentSideBarSecond.classList.add('show-text');
    thirdSidebar.classList.remove('show-third');
    document.getElementById('overlay-sidebar').style.display = 'block';
    closeProduct.style.display = 'none';
}
// EVENT OPEN SIDEBAR SECOND: END

// EVENT OPEN SIDEBAR THIRD: START
const thirdSidebar = document.getElementById('third-sidebar');
const groupThirdContent = document.getElementsByClassName('group__third--content');
function showInfoProduct(infoId) {
    for (var i = 0; i < groupThirdContent.length; i++) {
      groupThirdContent[i].classList.remove('show-info');
      groupThirdContent[i].style.display = 'none';
    }

    thirdSidebar.classList.add('show-third');
    var showContentSideBarThird = document.getElementById(infoId);
    showContentSideBarThird.style.display = 'block';
    showContentSideBarThird.classList.add('show-info');
}
// EVENT OPEN SIDEBAR THIRD: END

//CLOSE SIDEBAR SECOND: START
function closeSidebar() {
    middleSidebar.classList.remove('show-second');
    document.getElementById("overlay-sidebar").style.display = "none";
    closeProduct.style.display = 'block';
    productList.classList.remove('show-text')
    relatedList.classList.remove('show-text')
    ingredient.classList.remove('show-text');
    thirdSidebar.classList.remove('show-third');
}

function hideOverlay() {
    middleSidebar.classList.remove('show-second');
    document.getElementById("overlay-sidebar").style.display = "none";
    document.getElementById("overlay-left").style.display = "none";
    product.classList.remove('show');
    closeProduct.style.display = 'block';
    productList.classList.remove('show-text')
    relatedList.classList.remove('show-text')
    ingredient.classList.remove('show-text');
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
    discountList.classList.add('show-text')
    product.classList.remove('show');
    cosmetic.classList.remove('show');
    middleSidebar.classList.remove('show-second');
});

closeDiscount.addEventListener("click", () =>{
    discount.classList.toggle("show");
    discountList.classList.remove('show-text')
    overlayLeft.style.display = "none";

});

//EVENT OPEN / CLOSE COSMETIC: START
const cosmetic = document.getElementById('cosmetic');
const btnCosmetic = document.getElementById('btn-cosmetic');
const closeCosmetic = document.getElementById('close-cosmetic');
const cosmeticList = document.getElementById('cosmetic-list');

btnCosmetic.addEventListener("click", () =>{
    cosmetic.classList.add("show");
    cosmeticList.classList.add('show-text')
    product.classList.remove('show');
    discount.classList.remove('show');
    middleSidebar.classList.remove('show-second');
});

closeCosmetic.addEventListener("click", () =>{
    cosmetic.classList.toggle("show");
    cosmeticList.classList.remove('show-text')
    overlayLeft.style.display = "none";
});
//EVENT OPEN / CLOSE COSMETIC: END

// EVENT SEARCH: START
const search = document.getElementById('search');
const btnSearch = document.getElementById('btn-search');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-input');
const searchSuggest = document.getElementById('search-suggest');
btnSearch.addEventListener("click", () =>{
    search.classList.add("show");
    searchInput.classList.add('show-text');
    searchSuggest.classList.add('show-text');
    cart.classList.remove('show');
})

closeSearch.addEventListener("click", () =>{
    search.classList.toggle('show');
    searchInput.classList.remove('show-text');
    searchSuggest.classList.remove('show-text');
    overlayRight.style.display = "none";
});
// EVENT SEARCH: END

// EVENT CART: START
const cart = document.getElementById('cart');
const btncart = document.getElementById('btn-cart');
const closecart = document.getElementById('close-cart');

btncart.addEventListener("click", () =>{
    cart.classList.add("show");
    search.classList.remove('show');
    searchInput.classList.remove('show-text');
    searchSuggest.classList.remove('show-text');
})

closecart.addEventListener("click", () =>{
    cart.classList.toggle('show');
    overlayRight.style.display = "none";
});
// EVENT CART: END

//OPEN / CLOSE OVERLAY
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
    cart.classList.remove('show');
  }

// MENU MOBILE: START 
//EVENT OPEN / CLOSE MENU
const navListMenu = document.getElementById("nav-list-menu");                                       
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");    
const productMobile = document.getElementById('product-mobile');
const navListContent = document.getElementById("nav-list-content");

openMenu.addEventListener("click", () => {
    navListMenu.classList.toggle("show");
    navListContent.classList.add('show-text-mobile');
});
closeMenu.addEventListener("click", () => {
    navListMenu.classList.toggle("show");
    navListContent.classList.remove('show-text-mobile');
    productRelatedMobile.classList.remove('show-mobile')
    discountMobile.classList.remove('show-mobile');
    cosmeticMobile.classList.remove('show-mobile');
});
//EVENT OPEN / CLOSE RELATED PRODUCT
const btnProductRelated = document.getElementById("btn-product-related");
const productRelatedMobile = document.getElementById("product-related-mobile");
btnProductRelated.addEventListener('click', () => {
    productRelatedMobile.classList.toggle('show-mobile')
});

// EVENT OPEN / CLOSE DISCOUNT
const btnDiscountMobile = document.getElementById("btn-discount-mobile");
const discountMobile = document.getElementById("discount-mobile");
btnDiscountMobile.addEventListener('click', () => {
    discountMobile.classList.toggle('show-mobile');
});
// EVENT OPEN / CLOSE COSMETIC
const btnCosmeticMobile = document.getElementById("btn-cosmetic-mobile");
const cosmeticMobile = document.getElementById("cosmetic-mobile");
btnCosmeticMobile.addEventListener('click', () => {
    cosmeticMobile.classList.toggle('show-mobile');
});



//MENU MOBILE: END





