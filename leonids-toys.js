// const toys = [
//     teddyBear = {
//         id: 1,
//         name: "Teddy",
//         maker: "Hasbro",
//         price: 19.95,
//         weight: .3
//     },
//     bouncyBall = {
//         id: 2,
//         name: "Bouncy Ball",
//         maker: "Whoever Makes Balls",
//         price: 9.95,
//         weight: .2
//     },
//     rubikCube = {
//         id: 3,
//         name: "Rubik's Cube",
//         maker: "Erno Rubik",
//         price: 14.95,
//         weight: .25
//     }
// ]

// rubikSphere = {
//     id: 4,
//     name: "Rubik's Sphere",
//     maker: "Erno Rubik",
//     price: 14.95,
//     weight: .25
// }

// rubikTriangle = {
//     id: 5,
//     name: "Rubik's Triangle",
//     maker: "Erno Rubik",
//     price: 14.95,
//     weight: .25
// }

// // toys.push(rubikSphere);
// // toys.push(rubikTriangle);

// // for (toy of toys) {
// //     toy.price *= 1.05;
// // }

// // const itemToFind = 3;

// // for (toy of toys) {
// //     if (toy.id === itemToFind) {
// //         console.log(`The ${toy.name} is made by ${toy.maker} and costs ${toy.price}`)
// //     }
// // }

// const addToyToInventory = (toyObject) => {
//     const lastIndex = toys.length - 1;
//     const lastToy = toys[lastIndex];
//     const maxId = lastToy.id + 1;

//     toyObject.id = maxId;
//     toys.push(toyObject);
// }

// addToyToInventory(rubikSphere);
// addToyToInventory(rubikTriangle);

// const removeProduct = (id, itemList) => {
//     for (item of itemList) {
//         if (item.id === id) {
//             itemList.splice(itemList.indexOf(item), 1);
//         }
//     }
// }

// removeProduct(2, toys);

// console.log(toys);

// const currentInventory = [
//     "Muscle Man",
//     "Dora the Scientist",
//     "Princess Sparkles",
//     "Perry Scope",
//     "Explorer Backpack",
//     "Space Scout Suit",
//     "Geology Mineral Dig Kit",
//     "Perry Scope"
// ]

// const sellPerryScope = () => {

//     for (const toy of currentInventory) {
//         let availableForPurchase = false

//         if (toy === "Perry Scope") {
//             availableForPurchase = true
//         }

//         if (availableForPurchase) {
//             console.log("Enjoy your new Perry Scope")
//         }
//     }
// }

// sellPerryScope()