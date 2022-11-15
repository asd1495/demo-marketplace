//Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const closeProductDetail = document.querySelector('.product-detail-close');

//Event Listeners
menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrders);
closeProductDetail.addEventListener('click', closeProductDetailAside);

//Functions
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleOrders() {
    mobileMenu.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function showProductDetails() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//Products Array
const productsList = [];
productsList.push({
    name: 'Zelda Boxset',
    price: 799,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/M/QMZEL001BOX.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897&dpr=1%201x',
});

productsList.push({
    name: 'Chainsaw Man 1',
    price: 129,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/C/QCHSM001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897',
});

productsList.push({
    name: 'One Piece Blue',
    price: 159,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/O/QOBLU001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897',
});

productsList.push({
    name: 'Figura Levi Banpresto',
    price: 839,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/B/QBAND147.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897&dpr=1%201x',
});

productsList.push({
    name: 'Fortnite Zero War Vol. 1',
    price: 69,
    image: 'https://tiendapanini.com.mx/media/catalog/product/f/o/fortnitezero_cov.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897',
});

productsList.push({
    name: 'Demon Slayer 10',
    price: 119,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/K/QKIME010.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897',
});

productsList.push({
    name: 'Pokémon Brilliant Starts 3-Pack',
    price: 309,
    image: 'https://tiendapanini.com.mx/media/catalog/product/0/0/003950-180-50257.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897&format=jpeg&dpr=1%201x',
});

productsList.push({
    name: 'Dragon Ball 39',
    price: 99,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/M/QMDRB039.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897&dpr=1%201x',
});

productsList.push({
    name: 'Playera Berserk',
    price: 299,
    image: 'https://cdn.shopify.com/s/files/1/0339/4568/2053/products/playera-negra-berserk-guts-frente-911616.jpg?v=1653598664',
});

productsList.push({
    name: 'The Boys 9',
    price: 349,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/M/QMTBO009HC.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897',
});

productsList.push({
    name: 'Star Wars: War of the Bounty Hunters',
    price: 159,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/S/QSWGB001.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897&dpr=1%201x',
});

productsList.push({
    name: 'Dr. Slump 16',
    price: 139,
    image: 'https://tiendapanini.com.mx/media/catalog/product/Q/S/QSLUM016.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=897&width=960&canvas=960:897&dpr=1%201x',
});

productsList.push({
    name: 'Tamagotchi Eva 01',
    price: 599,
    image: 'https://m.media-amazon.com/images/I/71r9g1ZRLwL._AC_SL1500_.jpg',
});

productsList.push({
    name: 'Groundwork of Evangelion',
    price: 1199,
    image: 'https://m.media-amazon.com/images/I/81TyIDUdcmL.jpg',
});

productsList.push({
    name: 'Mob Psycho 100 Season 1',
    price: 1199,
    image: 'https://m.media-amazon.com/images/I/81WIXj0zTtL._AC_SL1500_.jpg',
});

productsList.push({
    name: 'Jojos Bizzare Adventure: Steelball Run',
    price: 299,
    image: 'https://m.media-amazon.com/images/I/81eLhkI1VPL.jpg',
});

productsList.push({
    name: 'Peluche Morgana',
    price: 399,
    image: 'https://m.media-amazon.com/images/I/41bssY6fEQL._AC_SL1000_.jpg',
});

productsList.push({
    name: 'Deskmat Kaguya-sama',
    price: 399,
    image: 'https://m.media-amazon.com/images/I/418qrmCn7xL._AC_.jpg',
});

productsList.push({
    name: 'Funko Monokuma (Danganronpa)',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/61n0n5dYcvL._AC_SL1400_.jpg',
});

//Products function
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //name, price, image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', showProductDetails);

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

