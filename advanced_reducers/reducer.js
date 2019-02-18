
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


// Add an item to an array
// state = [5, 6, 7, 8];
// var newItem = 0;
// var newState = [
//     ...state, newItem
// ]
// console.log(newState);


// Update an item with an array with map
// state = [1, 3, "X", 4];

// var newState = state.map((item)=>{
//     if (item ==="X"){
//         return 3;
//     }
//     else {
//         return item;
//     }
// })
// console.log(newState)

// Insert item in the middle of an array
// var state = [1, 2, 3, 5, 6];

// var newItem = 4;

// // make a copy (copied the entire array, we can specifiy if wanted)
// var newState = state.slice();

// // insert new item at index 3
// newState.splice(3, 0, newItem)

// console.log(newState);

// Alternative way to insert item into middle of an array
// var state = [1, 2, 3, 5, 6];
// var newItem = 4;

// var newState = [
//     ...state.slice(0,3), // copy first 3 items unchanged
//     newItem, // insert new item
//     ...state.slice(3) // copy rest of array starting with index 3
// ]

// console.log(newState)

// Remove an item from an array with filter

state = [1, 2, "X", 4]
var newState = state.filter((item)=>{
    if (item === "X"){
        return false;
    }
    return true
})

console.log(newState);