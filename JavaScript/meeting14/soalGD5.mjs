async function getPostDetails() {
    const ambilDari = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
    const data = await ambilDari.json();
  
    if (ambilDari.status === 200) {
      console.log(data.title);
    } else {
      console.log("Failed");
    }
  }
  
  getPostDetails();