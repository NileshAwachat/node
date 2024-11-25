function add(a,b){
    return a+b;
    
}

function sub(a,b){
    return a-b;
    
}

// wrong way to export multiple module from single file
// module.exports = add;
// module.exports = sub;

module.exports = {
        addfun: add,
        subfun: sub
}