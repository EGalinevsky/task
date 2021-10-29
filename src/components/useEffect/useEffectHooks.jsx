import React, { useEffect, useState } from "react";

export const Hooks2 = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);
  //В том случае если type изменился

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    console.log(type);
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1>ресурс: {type}</h1>

      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>todo</button>
      <button onClick={() => setType("posts")}>posts</button>

      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
      <p>{JSON.stringify(pos, null, 2)}</p>
    </div>
  );
};
