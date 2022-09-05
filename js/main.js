//Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

//Event Listeners
menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrders);

//Functions
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleOrders() {
    mobileMenu.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive');
}

//Products Array
const productsList = [];
productsList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productsList.push({
    name: 'Cámara',
    price: 22220,
    image: 'https://images.pexels.com/photos/2929411/pexels-photo-2929411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

productsList.push({
    name: 'Horse',
    price: 1029829,
    image: 'https://static.wikia.nocookie.net/memes-pedia/images/a/a3/FB_IMG_1596591789564.jpg/revision/latest?cb=20200911174317&path-prefix=es',
});

//Products function
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './visual/YardSale_Icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);

