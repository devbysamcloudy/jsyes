// An array wis an object. Special type  data is stored in key and value 
//in an object you choose  or create the key
//You can only use bracket notation 
//The keys are created automatically 
//The keys are sequential and are only in numbers
/*
In JavaScript, an array stores a collection of values in a single variable.
What an array stores
An array can store:
Numbers
Strings
Booleans
Objects
Functions
Other arrays
Mixed data types (all in one array)
*/

/*
1. An array is a special type of object used to store multiple values in one variable.
2. Array values are stored as key–value pairs where the keys (indexes) 
are created automatically.
3. Array indexes are numeric, start from 0, and increase sequentially.
4. Array elements are accessed and updated using bracket notation.
5. Arrays can store different data types at the same time
   (numbers, strings, booleans, objects, functions, and other arrays).
6. Existing array items can be updated by assigning a new value
   to a specific index.
7. Arrays maintain order, meaning each value has a fixed position.
8. JavaScript allows sparse arrays, where values can be stored
   at higher indexes without filling the gaps.

*/

//Example
let learnStaff = [
    25,
    "Money",
    true,
    function pro() {
     info: "my_life"
    }
];
console.table (learnStaff);

//Example 2
let data = [
    10,
    "hello", 
     true,
    function hy () { 
     name: "Sam" 
    },
     [1, 2, 3],

     function arrayLoop () {
    for (i = 0; i <= 10; i++) {
        console.log(`i is ${data[i]}`);
    }
},
    ];
console.table(data);
console.log(learnStaff[3]());

//<----updating existing items----->
// In JavaScript, existing array items can be updated
// by accessing them using their index and assigning
// a new value.

//Example 3
learnStaff[0] = 50;
learnStaff[50] = "new year";
learnStaff.push("datagen");


//Example 4
data[5]()

