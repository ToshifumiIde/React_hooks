//fookのuseReducerの実装
//状態遷移を管理するfooks
//「initial state」に対し「actionA」を実施=>「newState」が生成される
//「newState」に対し「actionB」を実施=>「newState2」が生成される
//使い方
//①reducer関数を定義する
//newState = reducer(currentState , action)
//第一引数：現在の状態、第二引数：どの様なactionを与えたいかのaction
//[state , dispatch] = useReducer(reducer , initialState)

import React , {useReducer} from 'react'

const initialState = 0;
const reducer = (currentState , action) => {
  switch(action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
}

const BasicReducer = () => {
  const [ count , dispatch ] = useReducer(reducer , initialState)
  return (
    <div>
      <div className="">{count}</div>
      <button onClick={()=>dispatch("add_1")}>Add + 1</button>
      <button onClick={()=>dispatch("multiple_3")}>Multiple * 3</button>
      <button onClick={()=>dispatch("reset")}>Reset</button> 
    </div>
  )
}

export default BasicReducer;