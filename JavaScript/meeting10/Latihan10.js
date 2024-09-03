// Soal Gambar nomor 1
function registerUser(name, userType) {
    if (userType === "VIP") {
      return `Welcome VIP ${name}`;
    } else {
      return `Welcome ${name}`;
    }
  }
  
  console.log(registerUser("Nina", "VIP"));
  console.log(registerUser("Nina", "NON VIP"));
  
  function applyDiscount(userType, purchaseAmount) {
    if (userType === "VIP") {
      var discount = 0.2;
    } else {
      var discount = 0.1;
    }
  
    return purchaseAmount - purchaseAmount * discount;
  }
  
  console.log(applyDiscount("VIP", 200));
  console.log(applyDiscount("NON VIP", 200));
  
  // Soal Gambar nomor 2
  function calculatePrice(quantity, pricePerItem, isMember) {
    if (isMember === true) {
      return quantity * pricePerItem - quantity * pricePerItem * 0.15;
    } else {
      return quantity * pricePerItem;
    }
  }
  
  console.log(calculatePrice(3, 150, true));
  console.log(calculatePrice(3, 150, false));
  
  function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed === true) {
      return `Purchase Confirmed With Total Price ${totalPrice}.`;
    } else {
      return `Purchase Not Confirmed`;
    }
  }
  
  console.log(confirmPurchase(true, 1000));
  console.log(confirmPurchase(false, 1000));
  
  // Soal 3 GDrive
  function checkStock(requestedQuantity, item) {
    var Stock = 50;
  
    if (requestedQuantity > Stock) {
      return `Stock insufficient for ${item}.`;
    } else {
      return `Stock sufficient for ${item}.`;
    }
  }
  
  console.log(checkStock(60, "Laptop"));
  console.log(checkStock(50, "Laptop"));
  
  // Soal 4 GDrive
  function calculateTax(price, location) {
    if (location == "Jakarta") {
      return price * 0.1;
    }
    if (location == "Bandung") {
      return price * 0.05;
    }
  }
  
  var finalPrice = calculateTax(10000, "Jakarta");
  console.log(finalPrice);
  
  function displayResult(finalPrice, paymentStatus) {
    if (paymentStatus == "paid") {
      return `Payment successful! Total amount:` + finalPrice;
    } else {
      return `Payment pending`;
    }
  }
  
  console.log(displayResult(finalPrice, "paid"));