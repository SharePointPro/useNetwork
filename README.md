# useNetwork
React Custom Hook to determine if webpage is online or offline

#usage
```
import useNetwork from 'hooks/useNetwork';

function App() {
  const [online] = useNetwork();
  console.log("is online?", online);
  ..
}
