"use strict";

var buttons = document.querySelectorAll('.btnOrder');
var shoppingCart = document.querySelector('#shoppingCart');
var price = document.querySelector('#price');
var priceList = new Map();
priceList.set("Margherita", 4.0);
priceList.set("Hawaii", 4.5);
priceList.set("Tonno", 5.5);

for(var button of buttons) {
    button.addEventListener('click', function(event) {
        var pizza = event.target.value;
        var option = document.createElement('option');
        option.text = pizza;
        shoppingCart.add(option);
        updatePrice();
    });
}

function updatePrice() {
    var cartItems = shoppingCart.children;

    var sum = 0;
    for(var item of cartItems) {
        sum += parseFloat(priceList.get(item.text));
    }
    price.innerHTML = (sum.toFixed(2) + '€').replace(".", ",");
}

document.querySelector('#btnDeleteAll').addEventListener('click', function(event) {
    var cartItems = shoppingCart.options.length = 0;
});

document.querySelector('#btnDeleteSelected').addEventListener('click', function(event) {
    for(var i = 0; i < shoppingCart.options.length; i++) {
        if(shoppingCart.options[i].selected) {
            shoppingCart.options[i] = null;
        }
    }
})
