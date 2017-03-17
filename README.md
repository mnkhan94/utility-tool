# utility-tool
This is my utility tool as an npm package| Made for Full Sail Url-Shortener Project


## Installing:

1. Install the npm package as a dev dependency
```javascript
npm install utility-tool-mnkhan --save-dev
```

2. Turn Debugging mode on in your app by setting DEBUG to true in your .env

```javascript
DEBUG=true
```

## Usage:
1. Place the following code wherever you want to log the good things (successes)
```javascript
utility.debug('PLACE_MESSAGE_HERE', 'success');
```

2. Place the following code wherever you want to log the bad things (error)
```javascript
utility.debug('PLACE_MESSAGE_HERE', 'error');
```
-Keep in mind that the success messages will be outputted green in your console, and the errors as red.

The End
