async function getUserProfile() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
  
    const data = await response.json();
  
    if (data.name === "Leanne Graham") {
      console.log("User is Leanne Graham");
    } else {
      console.log("User is not Leanne Graham");
    }
  }
  
  getUserProfile();