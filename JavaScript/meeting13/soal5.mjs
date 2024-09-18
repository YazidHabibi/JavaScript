function fetchDataA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data A')
        }, 1000);
    });
}

function fetchDataB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data B')
        }, 2000);
    });
}


Promise.all([fetchDataA(),fetchDataB()])
.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
    
});