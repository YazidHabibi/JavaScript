function greet (name,callback) {
    setTimeout(() => {
        console.log(`Hallo ${name}!`);
        callback()
    }, 1000);
}

function sayGoodBye  () {
    console.log('GoodBye!');
    
}

greet('Yazid',sayGoodBye)


