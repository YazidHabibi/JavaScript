function simulateDelay(){
    return new Promise((resolve,) => {
        setTimeout(() => {
            resolve("Data finished");
        }, 2000);
    })
}

async function messages() {
    const rst = await simulateDelay(); 
    console.log(rst);
  }

  messages();