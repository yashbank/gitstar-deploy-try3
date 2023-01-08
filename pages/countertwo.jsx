import React, { useState } from "react";

const countertwo = () => {
  const [c, sc] = useState(100);
  return (
    <div>
      <h1>Counttttttt:{c}</h1>
      <button onClick={() => sc(c - 1)}>----DEC-----</button>
    </div>
  );
};

export default countertwo;
