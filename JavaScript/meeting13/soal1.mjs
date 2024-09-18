function fetchData () {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched')
        }, 3000);
    })
}

fetchData()
.then((result) => {
    console.log(result);
    
}).catch((error) => {
    console.log(error);
});

