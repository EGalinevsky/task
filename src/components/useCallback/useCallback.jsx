import React, { useCallback, useState } from "react";
import ItemsList from "./ItemsLIst";

export const Hooks5 = () => {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "red" : "black",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `element ${i + 1}`);
  }, [count]); //useCallback возвращает полностью callback внутри

  return (
    <div>
      <div>
        <h1 style={styles}>hello this click{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setColored((prev) => !prev)}>Change</button>
      </div>
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};
