import { useState } from "react";
// import { useTransition } from "react";
const array = [...Array(20000)].map((_, i) => i);

function Example1() {
  const [list, setList] = useState(array);
  const [inputValue, setInputValue] = useState();
  // const [isPending, startTransition] = useTransition();
  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
    // startTransition(() => {
      const updatedList = array.filter((item) =>
        item.toString().includes(query)
      );
      console.log({ updatedList });
      setList(updatedList);
    // });
  };
  const listToShow = list.map((item) => {
    return (
      <ul key={item}>
        <li>{item}</li>
      </ul>
    );
  });
  // console.log({ list, isPending });

  return (
    <div>
      <input onChange={handleInputChange} value={inputValue} />
      {/* {isPending ? <div>'Loading'</div> : listToShow} */}
      {listToShow}
    </div>
  );
}

export default Example1;
