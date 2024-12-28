// Changing diffrent images on click

const arrowClass = document.querySelectorAll('.arrow');
let clickCount = 1;

// Determine the base URL dynamically
const baseURL = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/') + 'images/';
const activeProductContainer = document.querySelector('.active-product-container');
activeProductContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('left-arrow') || event.target.classList.contains('left-svg') || event.target.classList.contains('left-path')) {
        if (clickCount === 1) {
            clickCount = 5;
        }
        clickCount -= 1;
    } else if (event.target.classList.contains('right-arrow') || event.target.classList.contains('right-svg') || event.target.classList.contains('right-path')) {
        if (clickCount === 4) {
            clickCount = 0;
        }
        clickCount += 1;
    }
    document.getElementById('active-image').src = `${baseURL}image-product-${clickCount}.jpg`;
});

// Increeasing and decreasing the quantity of the product
const signClass = document.querySelectorAll('.sign');
const quantity = document.querySelector('.count');
signClass.forEach((sign) => {
    sign.addEventListener('click', function () {
        const currentQuantity = parseInt(quantity.textContent);
        if (this.classList.contains('minus')) {
            if (currentQuantity > 0) {
                quantity.textContent = parseInt(quantity.textContent) - 1;
            }
        } else {
            quantity.textContent = parseInt(quantity.textContent) + 1;
        }
    })
});

// Adding the product to the cart
const addToCart = document.getElementById('add-to-cart-button');
addToCart.addEventListener('click', function () {
    if (parseInt(quantity.textContent) != 0) {
        const currentQuantity = parseInt(quantity.textContent);
        const totalCost = currentQuantity * 125;
        document.querySelector('.cart-count').style.display = 'block';
        document.querySelector('.cart-count').textContent = currentQuantity;
        console.log(document.querySelector('.item-numbers'))
        document.querySelector('.item-numbers').textContent = currentQuantity;
        document.querySelector('.true-price').textContent = '$' + totalCost;
        quantity.textContent = 0;
    } else {
        console.log(document.querySelector('.main-cart').innerHTML)
    }
})

// Showing the cart
const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', function () {
    const cart = document.querySelector('.cart');
    if (cart.style.display === 'none') {
        if (Number(document.querySelector('.cart-count').textContent) !== 0) {
            cart.querySelector('.inner-cart').style.display = 'block';
            cart.querySelector('.hidden').style.display = 'none';
            document.querySelector('.cart').style.display = 'block';
        } else {
            cart.querySelector('.inner-cart').style.display = 'none';
            cart.querySelector('.hidden').style.display = 'block';
            cart.style.display = 'block';
        }
    } else {
        document.querySelector('.cart').style.display = 'none';
    }
})

// Closing the cart
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function () {
    document.querySelector('.cart').style.display = 'none';
});

// Resetting cart
document.getElementById('reset-cart').addEventListener('click', (e) => {
    document.querySelector('.cart-count').textContent = 0;
    document.querySelector('.cart-count').style.display = 'none';
    document.querySelector('.cart').querySelector('.inner-cart').style.display = 'none';
    document.querySelector('.cart').querySelector('.hidden').style.display = 'block';
})

// Switching between product images on click
const clickableImage = document.querySelectorAll('.thumb-img');
clickableImage.forEach((image) => {
    image.addEventListener('click', function () {
        const thumbNumber = this.alt.split('-')[2];
        const activeImage = document.querySelector('.active-thumbnail')
        activeImage.classList.remove('active-thumbnail');
        this.classList.add('active-thumbnail');
        clickCount = thumbNumber;
    })
})

// Showing the active image on click
const activeImage = document.getElementById('active-image');
activeImage.addEventListener('click', function () {
    if (window.screen.width > 768) {
        document.querySelector('.light-box').style.display = 'flex';
    };
});

// Closing the light box
const closeButton = document.getElementById('close-icon');
closeButton.addEventListener('click', function () {
    document.querySelector('.light-box').style.display = 'none';
});

// Switching between images in the light box by addin an event listener to the light box
const lightBox = document.querySelector('.light-box');
lightBox.addEventListener('click', function (event) {
    clickCount = Number(clickCount);
    if (event.target.classList.contains('light-left-arrow') || event.target.classList.contains('light-left-svg') || event.target.classList.contains('light-left-path')) {
        if (clickCount === 1) {
            clickCount = 5;
        }
        clickCount -= 1;
    } else if (event.target.classList.contains('light-right-arrow') || event.target.classList.contains('light-right-svg') || event.target.classList.contains('light-right-path')) {
        if (clickCount === 4) {
            clickCount = 0;
        }
        clickCount += 1;
    } else if (event.target.classList.contains('light-thumb-img')) {
        console.log('yes sir')
        const thumbAlt = event.target.alt;
        const activeThumbContainer = lightBox.querySelector('.active-thumb');
        activeThumbContainer.classList.remove('active-thumb');
        event.target.parentElement.classList.add('active-thumb');
        clickCount = parseInt(thumbAlt.split('-')[1]);
    } else {
        { };
    }

    const currentImageThumbnail = lightBox.querySelector('.active-thumb');
    currentImageThumbnail.classList.remove('active-thumb');
    const newThumbnailAlt = `thumb-${clickCount}`;
    const newThumbnailContainer = lightBox.querySelector(`img[alt="${newThumbnailAlt}"]`).parentElement;
    newThumbnailContainer.classList.add('active-thumb');
    lightBox.querySelector('#light-active').src = `${baseURL}image-product-${clickCount}.jpg`;
}
); 