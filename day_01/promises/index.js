
// const myPromise = new Promise((resolve, reject) => {
//     let marks = 33;
//     if (marks > 33) {
//         resolve("pass");
//     } else {
//         reject("fail");
//     }
// })
// const f1 = async () => {
// try {
//     const msg = await myPromise;
//     console.log(msg);
// } catch (error) {
//     console.log("some error occured..");
// }
// }
// f1();

const getData = async () => {
}
fetch("https://fakestoreapi.com/products")
    .then(res =>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log("error"))
// const output = getData();
// console.log(output);



// myPromise.then((msg) => console.log(msg))
//     .catch((error) => console.log("Some error occured", error));

// console.log(myPromise);
