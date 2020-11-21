//rafce：reactのコンポーネントを生成するショートカットキー
//{}カーリーブラケット
import React , {useState} from 'react'//reactパッケージのインストール

const Basic1 = ({name , today}) => {


  // const [count , setCount ] = useState(0);
  const [products , setProducts] = useState({
    name:"",
    price:""
  });


  return (
    <>
    {/* <button onClick={()=> {setCount(prevCount=>prevCount+1);setCount(prevCount=>prevCount+1);}}> */}
      {/* イベントハンドラーで実行される処理は複数記入することも可能 */}
      {/* {}カーリーブラケットで括って、セミコロンで区切ることで */}
    {/* Count{count} */}
    {/* </button> */}

    <form action="">
      <input 
        type="text"
        value={products.name}
        onChange={evt =>{
          setProducts({...products, name:evt.target.value})
          // ...products,と記載することで、useStateの初期値の{name:"",price:"",}の部分を分割している
          //その次にname:evt.target.valueと記載することで、nameキーに付随する値を変更が可能
          //分解しなかった場合、1回目の記入でnameを変更した時にはうまくいくが、
          //2回目でpriceを変更した場合priceの値のみが反映されることになる。
          }
        }
        />
      <input 
        type="text"
        value={products.price}
        onChange={evt =>{
          setProducts({...products, price:evt.target.value})
          // ...products,と記載することで、useStateの初期値の{name:"",price:"",}の部分を分割している
          //その次にname:evt.target.valueと記載することで、nameキーに付随する値を変更が可能
          }
        }
        />
    </form>

      <h3>
        Product name is {products.name}
      </h3>
      <h3>
        Product price is {products.price}
      </h3>
    </>
  )
};
//1番上の階層は<div></div>か<></>(reactフラグメント)で囲う必要がある

export default Basic1;