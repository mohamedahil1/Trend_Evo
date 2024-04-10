  // JavaScript code to handle adding products to cart
  document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".buy-btn");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Get product details
            const product = this.parentNode.parentNode;
            const productName = product.querySelector(".p-name").innerText;
            const productPrice = parseFloat(product.querySelector(".p-price").innerText.replace('$', ''));

            // Create an object to represent the product
            const cartItem = {
                name: productName,
                price: productPrice
            };

            // Add product to cart (you can replace this with your actual cart implementation)
            addToCart(cartItem);
        });
    });

    // Function to add item to cart
    function addToCart(item) {
        console.log("Adding to cart: ", item);
        // Here you can implement the logic to add the item to the cart
        // For example, you can store it in local storage or send it to a server.
    }
});



/* sproduct t shirt changing whrn clicking */

var mainimg=document.getElementById('mainimg')
var smallimg=document.getElementsByClassName('small-img')

smallimg[0].onclick=function(){
    mainimg.src=smallimg[0].src
}
smallimg[1].onclick=function(){
    mainimg.src=smallimg[1].src
}
smallimg[2].onclick=function(){
    mainimg.src=smallimg[2].src
}
smallimg[3].onclick=function(){
    mainimg.src=smallimg[3].src
}