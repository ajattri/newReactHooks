import { useDeferredValue, useEffect, useState } from "react";
import { mockArray } from "./mockArray";

function Example2() {
  const [list, setList] = useState(mockArray);
  const [inputValue, setInputValue] = useState();
  const deferredInputValue = useDeferredValue(inputValue)
  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
    
    //   const updatedList = array.filter((item) =>
    //     item.toString().includes(query)
    //   );
    //   console.log({ updatedList });
    //   setList(updatedList);
  };
  function getFilteredList(inputVal){
    const updatedList = mockArray.filter((item) =>
        item.toString().includes(inputVal)
      );
      console.log({ updatedList });
      setList(updatedList);
  }
  useEffect(()=>{
    getFilteredList(deferredInputValue)
  },[deferredInputValue])
  const listToShow = list.map((item) => {
    return (
      <ul key={item}>
        <li>{item}</li>
      </ul>
    );
  });
  console.log({ list});

  return (
    <div>
      <input onChange={handleInputChange} value={inputValue} />
      {listToShow}
    </div>
  );
}

export default Example2;
