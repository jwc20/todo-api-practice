import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const url = "http://127.0.0.1:8000/api/";

  useEffect(() => {
    const getAllTdos = async () => {
      try {
        const response = await axios.get(url);
        setIsLoading(false);
        const allTodos = response.data;
        console.log(allTodos);
        setTodos(allTodos);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    };

    getAllTdos();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      {todos &&
        todos.map((item, index) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}

      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default App;
