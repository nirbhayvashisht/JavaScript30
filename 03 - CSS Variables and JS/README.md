# THINGS THAT I LEARNT FROM IT

## new input types
We used type="range" for the range slider
```html
<input type="range">
```

We used type="color" for the color picker
```html
<input type="color">
```

## Used css variable for the first time
We declare them on some element, here we declared them on root
```css
:root {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
}
```

When we want to use those variables, we use var
```css
img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
}

.hl{
    color: var(--base);
}
```
## Learnt how to update CSS Variables using JavaScript
```javascript
document.documentElement.style.setProperty(css_variable_name, new_value);
```

## Learnt about NodeList
- It is returned by querySelectorAll
- It is just like an array but with very few methods.

## Learnt about dataset
dataset is an object that contains all the data- attributes of that element.<br>
Example:
```javascript
console.log(element.dataset);
```
