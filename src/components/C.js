import React , { useContext } from 'react'
import AppContext from "../contexts/AppContext";

//親コンポーネント(今回はApp.js)から孫コンポーネント(今回はC.js)へ値を渡す場合、useContextを用いる
//


const C = () => {
  const value = useContext(AppContext)

  return (
    <div>
      <h3>Cコンポーネント</h3>
    {value}
    </div>
  )
}

export default C;