const { useState, useEffect } = require("react");

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/blogs")
      .then((res) => res.json())
      .then((data) => { 
        setTodos(data.blogs)
      });
  }, []);

  return [todos, setTodos];
};

export default useTodos;
