function printEverySecond () {
    let i = 0
    let printInterval = setInterval(() => {
        console.log("Hello World!");
        i++
        if(i === 5) {
            clearInterval(printInterval)
        }
    }, 1000);
}

printEverySecond()