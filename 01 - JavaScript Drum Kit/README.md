# THINGS THAT I LEARNT FROM IT

## data attribute
If you want to make your own attribute, you have to put it behind data-<br>
Example : data-key

## I used attribute selector for the first time
```javascript
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
```

## I used audio tag for the first time
```javascript
<audio data-key="83" src="sounds/hihat.wav"></audio>
```

## I learnt how to rewind audio to the start
```javascript
audio.currentTime = 0
```

