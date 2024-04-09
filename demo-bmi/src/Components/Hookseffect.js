import React, { useState,useEffect } from "react";

function Hookseffect() {
  const [count, setcount] = useState(0);
  useEffect(()=>{
      document.title = `${count} times`
  })
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>{count}</button>
    </div>
  );
}

export default Hookseffect;
