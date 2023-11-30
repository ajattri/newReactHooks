import { useDeferredValue, useEffect, useState } from "react";
import { mockArray } from "./mockArray";

function Example2() {
  const [list, setList] = useState(mockArray);
  const [inputValue, setInputValue] = useState();
  const deferredInputValue = useDeferredValue(inputValue)
  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
  };
  // let updatedList=[];
  // function getFilteredList(inputVal){
  //    updatedList = list.filter((item) =>
  //       item.toString().includes(inputVal)
  //     ) 
  //     console.log({ updatedList });
  //     // setList(updatedList);
    
  // }
  // useEffect(()=>{
  //   getFilteredList(inputValue)
  // },[inputValue])


  const updatedList = list.filter((item) =>
  item.toString().includes(deferredInputValue)
) || list;
console.log({updatedList})
  const listToShow = (updatedList.length>0? updatedList:list).map((item) => {
    return (
      <ul key={item}>
        <li>{item}</li>
      </ul>
    );
  });
  // console.log({ list});

  return (
    <div>
      <input onChange={handleInputChange} value={inputValue} />
      {listToShow}
    </div>
  );
}

export default Example2;
