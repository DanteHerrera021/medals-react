import { useState } from "react";

function Country() {
  const [name, setName] = useState("United States");
  const [gold, setGolds] = useState(0);

  const handleClick = () => {
    setGolds(gold + 1);
  };
  return (
    <>
      <div>
        <h1>
          {name} - {gold} gold medal{gold != 1 ? "s" : ""}
        </h1>
        <button onClick={handleClick}>Add medal +</button>
      </div>
    </>
  );
}

export default Country;
