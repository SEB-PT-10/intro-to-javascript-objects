 const cart = {
    storeName: 'Corner Market',
    items: [
        {name: 'Bread', qty: 1},
        {name: 'Milk', qty: 2},
    ],
    customerName: 'Sam',
    addItem(item) {
        cart.items.push(item)
    },
    itemCount() {
        return cart.items.length
    },
 }

cart.addItem({name: 'Apples'})
cart.items[2].qty = 4
console.log(cart)
console.log(cart.items[2])


// console.log(cart.items[0].name)
// console.log(cart.itemCount())
// console.log(cart)


// console.log(cart.itemCount())
// cart.addItem('Apples')
// console.log(cart.itemCount)



// cart.deliveryNote = 'This is a short note'

// console.log(cart.deliveryNote)

// delete cart.deliveryNote

// console.log(cart.deliveryNote)

// console.log(cart.customerName)
// cart.customerName = 'Adam'
// console.log(cart.customerName)

// cart.discountCode = 'SAVE10'
// console.log(cart)

// delete cart.discountCode
// console.log(cart)
// console.log(cart.discountCode)

//  let items = ['Bread', 'Milk']
// console.log(items[0])

// let myVar = 'items'

// console.log(cart[myVar][0])