function simulateTask() {
    return new Promise((resolve, reject) => {
        var Timeout = 2000
        setTimeout(() => {
            if (Timeout <= 2000) {
                resolve('Task success')
            } else if (Timeout > 2000) {
                reject('Task failed')
            }
        }, Timeout);
    })
}

simulateTask()
.then((result) => {
    console.log(result);
    
}).catch((error) => {
    console.log(error);
    
})
.finally(() =>{
    console.log('Task Completed');
    
})
