# Google Optimize Use Multi Variant Hook

# Usage
The following code goes inside your component
```jsx
const Component = () => {
  const multi = useMultiVariant('mytestid', [3]);
  switch (multi[0]) {
    case 0: return <div>yes</div>
    case 1: return <div>maybe</div>
    case 2: return <div>no</div>
    default: return <div>loading</div>
  }
};
```

# License
MIT

# Author
Matheus Freire Rabelo
