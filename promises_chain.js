let turnOnComputer = function() {

    return new Promise((resolve, reject) =>{
        resolve ("This COmputer Is On");
    });
};

let openBrowser = function(msg='') {
    return new Promise((resolve, reject) =>{
        resolve (msg +"Browser is Opened");
    });
};

let goToPage = function(msg) {
    return new Promise((resolve, reject) =>{

        resolve (msg + "go to digi solutions");
    });

};

//turnOnComputer();

// turnOnComputer().then((result)=>{
//     return openBrowser(result);
//     },(error)=>{
//     console.log(error);
// }).then((result)=>{
//     return goToPage(result);
// },(error)={
// },(error)=>{
//     console.log(error);
// }).then((result)=>{
//     console.log("WE ARE DONE " +result);
// },(error)=>{
//     console.log(error);
// });

//
// turnOnComputer().then((result)=>{
//     return openBrowser(result);
// }).then((result)=>{
//     return goToPage(result);
// }).then((result)=>{
//     console.log("WE ARE DONE " +result);
// }).catch((e)=>{
//     console.log(e);
// });
//
Promise.all ([turnOnComputer(), openBrowser(), goToPage()]).then( ()=>{
    console.log("DONE");
})