# Google Optimize Use Multi Variant Hook

# Usage
The following code goes to the variant into Google Optimize
```js
var myTest = new CustomEvent('mytest', { detail: () => 'maybe' });
window.dispatchEvent(myTest);
```

The following code goes inside your component
```jsx
const Component = () => {
  const multi = useMultiVariant('mytest');
  switch (multi) {
    case 'yes': return <div>yes</div>
    case 'maybe': return <div>maybe</div>
    case 'no': return <div>no</div>
    default: return <div>loading</div>
  }
};
```

# License
MIT

# Author
Matheus Freire Rabelo
