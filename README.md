# 20 12 03 JS Loops Primary
Add comments above each exercise solution (at minium). Comment out any broken code before 9PM submission and provide context on what's not working.

### Exercise 1
Prompt the user to enter a start number and an end number. The end number must be at least 4 more than the start number. If it is not prompt the user to re-enter it until it is at least 4 more than the start number. Output both values in the formatted message : "Start number : [USER_START_NUM]. End Number : [USER_END_NUM]".

### Exercise 2
Count from the start number to the end number increasing by 1 each iteration. Output the current value of the iterator on each iteration.

### Exercise 3
Count from the end number to the start number decreasing by 2 each iteration. Output the current value of the iterator on each iteration.

### Exercise 4
Count from the start number to the end number increasing by 1 each iteration. If the current value of the iterator is divisible by 2 output the formatted message : "[ITERATOR_VALUE] is divisible by 2" on each iteration. If the current value of the iterator is divisible by 3 output the formatted message : "[ITERATOR_VALUE] is divisible by 3" on each iteration. Otherwise just output the current value of the iterator on each iteration.

### Exercise 5
Declare an empty shopping list array. Prompt the user to add items to the shopping list until they enter done (either in all caps, initial caps, or all lowercase). Iterate through the shopping list array after the user enters done and output each item proceeded by a number. Expected output it you enter three items.
```md
1. Bread
2. Eggs
3. Milk
```

### Bonus : Added Complexity to Exercise 5
Iterate through the shopping list array to build a string using the addition assignment in order to concatenate each item separated by a comma. Expected output if you enter three items.
```md
bread, eggs, milk
```
Allow the user to confirm if the list is correct and display the built string. Example formatted message in confirm popup.
```
Is this shopping list correct : bread, eggs, milk.
```
If the user chooses okay output the formatted message : "List Approved. Total Items :[NUMBER_OF_ITEMS]". If the user chooses cancel clear the array of all items and output the formatted message : "List Cleared.Total Items :[NUMBER_OF_ITEMS]".