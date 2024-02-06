import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  let [state, setState] = useState(0);
  let books = useRef([]);
  function increase() {
    setState((state += 1));
  }
  useEffect(() => {
    axios.get("http://localhost:9000/books").then((data) => {
      books.current = data.data;
      console.log(books.current);
    });
  }, []);

  return (
    <div className="pt-8 ps-12">
      <p className="text-3xl font-bold underline">{state} sdadsa</p>
      <button
        className="h-10 mt-10 px-6 font-semibold rounded-md bg-black text-white"
        onClick={() => increase()}
      >
        increase
      </button>
      <div>{books.current[0]?.title}</div>
    </div>
  );
}

export default App;
