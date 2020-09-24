# THINGS THAT I LEARNT FROM IT

## Used fetch for the first time

- It returns a promise
- We used then to retrieve the data using .json(), but the data returned was also a promise so we used then again.

```javascript
fetch(endpoint /*it takes endpoint url*/)
  .then((data) => data.json()) //the data returned wasn't in form of json
  .then((rawData) => console.log(rawData));
```

## numberswithcomma()
-Used to convert numbers into string numbers (with comma in places)

```javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

