# THINGS THAT I LEARNT FROM IT

## console.table 
Used like console.log, but instead it prints the data in the form of a table.

## basic array methods use cases
- filter
    - New Array is created
    - We filter out the array and hence the items are reduced
    - Example: Filter the list of inventors for those who were born in the 1500's
```javascript
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```
- map
    - New Array is created
    - We are filtering items, but in a way that the number of items are the same
    - Example: Give us an array of the inventors first and last names
```javascript
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```
- sort
    - Items are sorted using 1 and 0
    - Example
```javascript
const sorted = inventors.sort((a,b)=>a.year > b.year ? 1:-1);
```
- reduce
    - used for calculation

## Converting nodeList to an Array
- We know that querySelector all gives us a nodeList, not an array.
- to convert it into an array we can do to things
```javascript    
Array.from(nodeList)
//or
[...nodeList]
```