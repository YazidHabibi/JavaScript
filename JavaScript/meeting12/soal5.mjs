function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
        
    }, delay);
}   

delayedMessage("Hello after delay", 2000)