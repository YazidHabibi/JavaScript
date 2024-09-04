// Soal Gambar nomor 1
function registerUser(nama, usertype) {
  if (usertype === 'VIP') {
    return ` Welcome VIP ${nama}!`
  }else {
    return  ` Welcome ${nama}!`
  }
}
console.log(registerUser('Nina', 'VIP',));
console.log(registerUser('Nina','NON VIP'));

function applyDiscount(usertype, purchaseAmount) {
  let diskon = 0;
  if (usertype === 'VIP') {
      diskon = 20;
  }else {
    diskon = 10;
  }
  return purchaseAmount - (purchaseAmount * diskon /100 )

}

console.log(applyDiscount('VIP',200 ));
console.log(applyDiscount('NON VIP',100));

// Tugas gambar nomor 2

function calculatePrice (quantity,pricePeritem, Ismember) {
  total = quantity * pricePeritem
  if (Ismember === true) {
    return total - (total * 15/100)
  }else {
    return total
  }
}
console.log(calculatePrice(3,150, true));

function confirmPurchase (isConfirmed, totalPrice) {
  if (isConfirmed === true) {
    return  `Purchase Is Confirmed With Total Price : ${totalPrice}`
  } else {
    return ` Purchase Not Confirmed`
  }
}
console.log(confirmPurchase(true, calculatePrice(3, 150,true)));

// soal gambar nomor 3

function checkStock (item,requestedQuantity) {
  let stockbarang = 50
  if (requestedQuantity > stockbarang) {
    return `Stock insufficient for ${item}`
  }else {
    return `Stock sufficient for ${item}`
  } 
}
console.log(checkStock("Laptop", 60));

function  restockItem (item,additionalStock) {
 let stockBarang = 5 + additionalStock
 let requestedQuantity = 60;
  if (requestedQuantity <= stockBarang) {
      return `Restock complete for ${item}`
  } else {
    return `Restock Needed for ${item}`
  }
}
console.log(restockItem('Laptop',55));

// Latihan gambar nomor 4

function calculateTax (price,location) {
  pajak = 0
  if (location === 'Jakarta') {
    pajak = 10
  }else if (location === 'Bandung') {
    pajak = 5
  }
  return price - (price * pajak / 100)
}
console.log(calculateTax(1000,'Jakarta'));

function displayResult (finalPrice,paymentStatus) {
  if (paymentStatus === 'paid') {
    return `Payment successful Total amount : ${finalPrice}`
  }else {
    return  `Payment Pending`
  }
}
console.log(displayResult(calculateTax(1000,'Jakarta'),'paid'));

