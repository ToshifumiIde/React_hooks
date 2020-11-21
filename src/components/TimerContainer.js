import React , {useState} from 'react';
import Timer from "./Timer";

const TimerContainer = () => {
  const [display , setDisplay] = useState(true);

  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>
        Switch Timer
      </button>
      { display && <Timer /> }
      {/* 上記の様にカーリーブラケット内に &&でつなぐことで両方がtrueの時に <Timer />コンポーネントが表示される様になる。基本的に<Timer />コンポーネントはtrueなので、buttonが押されてdisplayの真偽値が変更されれば<Timer />コンポーネントの表示が切り替わる */}
    </div>
  )
}

export default TimerContainer;