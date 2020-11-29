import React from "react";

export default function Footer() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const listItems = numbers.map((item) => {
      //JSX format
    return <li key={item.toString()}>{item}</li>;
  });

  return (
    <footer>
        <h2>List items with keys</h2>
      <ul>{listItems}</ul>
      <p>This is footer</p>
    </footer>
  );
}
