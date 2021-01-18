//synchronous line by line
//asynchronous processed first

let myPromis = new Promise(function (resolve, reject) {
    let complete  = false;

    if(complete){
        resolve ("Resolved");
    }else{
        reject("Rejected")
    }
    
});

myPromis.then((result)=> {
    console.log(result);
    },(error)=>{
    console.log(error);
});

console.log("statment");