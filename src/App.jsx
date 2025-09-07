import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const helloObject = {
    message: "Hi, there",
    name: "Tarek",
    emoji: "<3",
    numArray: [1, 2, 3, 4, 5],
  };

  const fruits = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.8 },
    { name: "Mango", price: 1.5 },
  ];

  return (
    <div>
      <Hello helloObject={helloObject} />
      <Fruits fruits={fruits} />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
