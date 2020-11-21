import React , {useState , useEffect} from 'react'

const BasicUseEffect = () => {
  const [count ,setCount] = useState(0);
  const [item , setItem ] = useState("");


  useEffect(()=>{
    console.log("UseEffect invoked");
    },[count]
  );
  //useEffectは、第二引数を指定しない場合、renderが実行されるたびに実行される関数
    //最初のrenderが実行されたタイミングのみ実行する場合、第二引数に[]空を入力
    //特定のrenderが実行されたタイミングのみ実行する場合、第二引数の[]にその値を入力(今回はcountを指定)

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click:{count}
      </button>
    <input type="text" value={item} onChange={evt=>setItem(evt.target.value)}/>
    </div>
  )
}

export default BasicUseEffect;