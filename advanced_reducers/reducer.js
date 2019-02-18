
// Updating an Object
// var state = {
//     clicks: 0,
//     count: 0
// };
// console.log(state);

// var newState = {
//     ...state,
//     clicks: state.clicks + 1,
//     count: state.count + 1
// };

// console.log(newState);


// Updating an Object in an Object
// var state = {
//     house: {
//         name: "Ravenclaw",
//         points: 17
//     }
// }

// console.log(state);
// var newState= {
//     ...state, // copy the state (level 0)
//     house: {
//         ...state.house, // copy the nested object (level 1)
//         points: state.house.points + 5
//     }
// }
// console.log(newState)

// Updating an object that is two levels deep

// var state = {
//     school: {
//         name: "Hogwarts",
//         lastName: "Something",
//         house: {
//             name: "Ravenclaw",
//             lastName: "Snow",
//             points: 17
//         }
//     }
// };
// console.log(state);

// var newState = {
//     ...state,
//     school: {
//         ...state.school,
//         house: {
//             ...state.school.house,
//             points: state.school.house.points + 5
//         }
//     }
// }
// console.log(newState);

// Updating an object by key
// const state = {
//     houses: {
//         houses: {
//             gryffindor: {
//                 points: 15
//             },
//             ravenclaw: {
//                 points: 18
//             },
//             hufflepuff: {
//                 points: 7
//             },
//             slytherin: {
//                 points: 5
//             }
//             }
//     }
// }

// const key = "ravenclaw";
// var newState = {
//     ...state, 
//     houses: { 
//         ...state.houses,
//         [key]: {
//             ...state.houses[key],
//             points: state.houses[key].points + 5
//         }
//     }
// }

// console.log(newState)

// Prepend an item to an array

// var state = [3, 4, 5, 6];
// var newItem = 1
// var newState = [
//     newItem, ...state
// ]
// console.log(newState)