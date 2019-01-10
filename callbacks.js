

console.log('this is a callback example');

function operation(callback1){
    console.log('this is iniside operation')

    callback1();
}

function start(){
    console.log('this is inside start');

    operation(function () {
        console.log('this is inside callback1')
    });
    }
start();