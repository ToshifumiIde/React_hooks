//useReducerとuseContextを組み合わせることで、孫コンポーネントから親コンポーネントへの操作が可能となる。

import React, { useContext } from 'react';
import AppContext from "../contexts/AppContext";



const CompC = () => {
  const {dispatchProvided} = useContext(AppContext)
  return (
    <div>
      <button onClick={()=>dispatchProvided("add_1")}>Add + 1</button>
      {/* <button onClick={}></button> */}
    </div>
  )
}

export default CompC
