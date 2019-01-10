//check argument inside function

function find(args){
    if(args == null || args == '' || args == undefined){
        throw new Error("invalid args");
    }
    
}

function findb(args){
    //a better way to check
    if(!args){
        throw new Error('invalid argss');

    }
}

//find('');
//findb();