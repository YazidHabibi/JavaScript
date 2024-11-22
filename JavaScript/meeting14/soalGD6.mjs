async function checkPostAvialability() {
    const status = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
    const data = await status.json();
  
    if (data.userId > 5) {
      console.log("Post is avialable for user IDs greater than 5");
    } else {
      console.log("Post is not avialable for user IDs greater than 5");
    }
  }
  
  checkPostAvialability();