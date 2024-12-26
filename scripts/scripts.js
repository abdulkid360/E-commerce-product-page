// Changing diffrent images on click

const arrowClass = document.querySelectorAll('.arrow');
let clickCount = 1;

arrowClass.forEach((arrow) => {
    arrow.addEventListener('click', function(){
        if(this.id === 'left-arrow'){
            if(clickCount === 1){
                clickCount = 5;
            }
            clickCount -= 1;
        } else {
            if(clickCount === 4){
                clickCount = 0;
            }
            clickCount += 1;
        }
        document.getElementById('active-image').src = `./images/image-product-${clickCount}.jpg`;
})});

// Increeasing and decreasing the quantity of the product
const signClass = document.querySelectorAll('.sign');
const quantity = document.querySelector('.count');
signClass.forEach((sign) => {
    sign.addEventListener('click', function(){
        const currentQuantity = parseInt(quantity.textContent);
        if(this.classList.contains('minus')){
            if(currentQuantity > 0){
                quantity.textContent = parseInt(quantity.textContent) - 1;
            }
        } else {
            quantity.textContent = parseInt(quantity.textContent) + 1;
        }
    })
})

// Adding the product to the cart
const addToCart = document.getElementById('add-to-cart-button');
addToCart.addEventListener('click', function(){
    if(parseInt(quantity.textContent) != 0){
        const currentQuantity = parseInt(quantity.textContent);
        const totalCost = currentQuantity * 125;
        document.querySelector('.cart-count').textContent = currentQuantity;
        document.querySelector('.item-numbers').textContent = currentQuantity;
        document.querySelector('.true-price').textContent = '$' + totalCost;
        quantity.textContent = 0;
    }
})

// Showing the cart
const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', function(){
    if(document.querySelector('.cart').style.display === 'none'){
        if(Number(document.querySelector('.cart-count').textContent) !== 0){
            document.querySelector('.cart').style.display = 'block';
        }else{
            document.querySelector('.main-cart').innerHTML = '<p class="center">Your cart is empty</p>';
            document.querySelector('.cart').style.display = 'block';
        }
    }else{
        document.querySelector('.cart').style.display = 'none';
    }
})

// Closing the cart
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function(){
    document.querySelector('.cart').style.display = 'none';
});