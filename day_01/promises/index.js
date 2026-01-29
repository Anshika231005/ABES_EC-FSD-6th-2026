const myPromise =new Promise((resolve, reject) => {
    let marks=33;
    if (marks >= 33) {
        resolve("You are passed");
    } else {
        reject("You are failed");
    }
});
// console.log(myPromise);
myPromise.then((msg) =>console.log(msg)) 
.catch ((err) =>console.log("error" ,err));