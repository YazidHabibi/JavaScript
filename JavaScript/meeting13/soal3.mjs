function fetchStep1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step 1 Complete');
        }, 1000);
    })
}
function fetchStep2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step 2 Complete');
            
        }, 2000);
    })
}
function fetchStep3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step 3 Complete');
            
        }, 3000);
    })
}

Promise.all([fetchStep1(),fetchStep2(),fetchStep3()])
.then((result) =>  {
    console.log(result);
    
})
.catch((error) => {
    console.log(error);
})