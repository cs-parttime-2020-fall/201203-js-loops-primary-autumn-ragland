// console.log("20 12 03 JS Loops Primary"); // check that files are linked

// Prompt the user to enter a start number and an end number. The end number must be at least 4 more than the start number. If it is not prompt the user to re-enter it until it is at least 4 more than the start number. Output both values in the formatted message : "Start number : [USER_START_NUM]. End Number : [USER_END_NUM]".

let startNum = parseInt(prompt("Enter a start number"));
let endNum = parseInt(prompt("Enter an end number"));
while(endNum < startNum + 4){
    endNum = parseInt(prompt("Enter a higher end number"));
}
console.log(`Start Number : ${startNum}. End Number : ${endNum}`);

// Count from the start number to the end number increasing by 1 each iteration. Output the current value of the iterator on each iteration.
for(let i = startNum; i <= endNum; i++){
    console.log(`Count : ${i}`);
}

// Count from the end number to the start number decreasing by 2 each iteration. Output the current value of the iterator on each iteration.
for(let i = endNum; i >= startNum; i-=2){
    console.log(`Count : ${i}`);
}

// Count from the start number to the end number increasing by 1 each iteration. If the current value of the iterator is divisible by 2 output the formatted message : "[ITERATOR_VALUE] is divisible by 2" on each iteration. If the current value of the iterator is divisible by 3 output the formatted message : "[ITERATOR_VALUE] is divisible by 3" on each iteration. Otherwise just output the current value of the iterator on each iteration.
for(let i = startNum; i <= endNum; i++){
    if(i % 2 == 0) {
        console.log(`${i} is divisible by 2`);
    } else if(i % 3 == 0) {
        console.log(`${i} is divisible by 3`);
    }else {
        console.log(`${i}`);
    }
}

// Declare an empty shopping list array. Prompt the user to add items to the shopping list until they enter done (either in all caps, initial caps, or all lowercase). Iterate through the shopping list array after the user enters done and output each item proceeded by a number.

let shoppingList = [];
let newItem = prompt("Enter an item or enter done");
while(newItem != "done" && newItem != "DONE" && newItem != "Done"){
    shoppingList.push(newItem);
    newItem = prompt("Enter another item or enter done");
}
for(let i = 0; i < shoppingList.length; i++){
    console.log(`${i + 1}. ${shoppingList[i]}`);
}

// Iterate through the shopping list array to build a string using the addition assignment in order to concatenate each item separated by a comma. Expected output if you enter three items.
let displayStr = "";
for(let i = 0; i < shoppingList.length; i++){
    displayStr += `${shoppingList[i]}, `
}
console.log(displayStr);
// Allow the user to confirm if the list is correct and display the built string. Is this shopping list correct : bread, eggs, milk.
// If the user chooses okay output the formatted message : "List Approved. Total Items :[NUMBER_OF_ITEMS]". If the user chooses cancel clear the array of all items and output the formatted message : "List Cleared.Total Items :[NUMBER_OF_ITEMS]".
let approveList = confirm(`Is this correct : ${displayStr}`);
if(approveList){
    console.log(`List Approved. Total Items :${shoppingList.length}`);
} else {
    shoppingList = [];
    console.log(`List Cleared.Total Items :${shoppingList.length}`);
}