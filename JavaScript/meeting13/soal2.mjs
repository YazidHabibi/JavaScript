const angka = [3,7,1,6];

function checkNumber() {
    return new Promise((resolve, reject) => {
        if (angka [1]  > 5) {
            resolve("Lebih dari 5")
        }else if (angka [1] <= 5) {
            reject('Number too low')
        }
    })
}

checkNumber()
.then((result) => {
    console.log(result);
    
})

.catch((error) => {
    console.log(error);
});