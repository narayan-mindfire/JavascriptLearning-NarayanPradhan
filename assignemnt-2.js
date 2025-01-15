// Shopping Cart
console.log()
//input -> keeping it global so that it can be accessed with reference
let cart = [
    { name: "Apple", price: 120, quantity: 3 },
    { name: "Milk", price: 60, quantity: 2 },
    { name: "Bread", price: 40, quantity: 1 },
  ];

  //functionality to display the current cart
  function displayCart(){
    for(let item of cart)
        console.log(`name : ${item.name}  price : ${item.price} quantity : ${item.quantity}`)
  }

//functionality to add quantity
function addItem(name, price, qty){
    var tempObj = {}
    tempObj.name = name
    tempObj.price = price
    tempObj.quantity = qty
    cart.push(tempObj)
}

//functionality to update quantity
function updateQty(name, newQty){
    let found = false
    for(let item of cart)
        if(item.name === name) {
            found = true
            item.quantity = newQty;
            console.log(`Item updated successfully`)
            return;
        }
    console.log(`Item with the name : ${name} was not found in your cart!`)
    console.log()
}

// functionality to remove an item from cart
function removeItemFromCart(name){
    for(let i = 0; i<cart.length; i++){
        if(cart[i].name === name){
            cart.splice(i, 1)
            console.log(`Item is successfully removed from cart`)
            return;
        }
    }
    console.log(`Item with the name : ${name} was not found in your cart!`)
}

// functionality to calculate the total price
function totalPrice(){
    let res = 0
    for(let item of cart) res += item.price*item.quantity
    return res
}
//displaying the cart
console.log("displaying the cart")
displayCart()
//adding item to the cart
console.log("adding item into the cart")
addItem("Cycle", 21782, 1)
displayCart()
console.log("Updating quantity in cart")
//updating quantity 
updateQty("Cycle", 2)
displayCart()
console.log("removing item from cart")
//removing item from cart
removeItemFromCart("Apple")
displayCart()
console.log("finding total price of items in cart currently")
//calculating total price
console.log(totalPrice())
displayCart()