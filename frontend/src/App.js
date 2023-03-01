import React from "react";

import { useEffect, useState } from "react";

const list = [
  { id: 1, title: "1", body: "1" },
  { id: 2, title: "2", body: "2" },
  { id: 3, title: "3", body: "3" },
];

function App() {
  return (
    <div className="App">
      {list.map((item, index) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
