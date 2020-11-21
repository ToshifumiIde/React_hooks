//APIにアクセスするコンポーネントを作成

import React , {useState , useEffect} from 'react';
import axios from "axios";

const ApiFetch = () => {
  const [posts , setPosts] = useState([]);
  const [id , setId] = useState(1);
  const [clicked , setClicked] = useState(false);
  
  const handlerClicked = ()=>{
    setClicked(!clicked)
  }

  useEffect(() => {

    //①axiosを用いたAPIの取得方法
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then(res => {
    //   setPosts(res.data)
    // })
    //【説明】
    //返り値をthenを用いてresに代入して、res(response)を用いて返り値を渡す
    //res.dataとすることでjsonオブジェクトの取得が可能となる

    //②fetch()メソッドを用いたAPIの取得方法
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}` , {method:"GET"})
    .then(response => response.json())
    .then(data => {
      setPosts(data)
    })
    //【説明】
    //fetch:取って来る、持って来る、連れて来る、呼び出す、引き出す、引きつける
    //IT分野では、機器やプログラムなどが特定の場所から「データなどを読み出す」動作のことを指すことが多い
    //fetchの最も簡単な使い方
    //第一引数：fetchしたいリソース
    //第二引数：リクエストに適用したい設定を含むオプションの（必須では無い）オブジェクト
    //戻り値　：解決時にリクエストのレスポンスを表すResponseオブジェクトを取得できるPromiseオブジェクト
    //fetch()メソッドの第一引数にfetchで「取得したいリソースへのパス」を記載する。戻り値にレスポンス(response)を含むpromiseが返る
    //返却されたpromiseオブジェクトはHTTP形式で返って来るため、実際のJSONでは無い。
    //レスポンスオブジェクトからJSONを抽出するために
    //.then()メソッドを使用する必要がある。
  },[clicked]);

  return (
    <div>
    <input type="text" value={id} onChange={evt=>setId(evt.target.value)}/>
    <br/>
    <button type="button" onClick={handlerClicked}>Get Post</button>
    <br/>
    {posts.title}
      {/* <ul>
        {
          posts.map(post =>
          <li key={post.id}>{post.title}</li>
          )
        }
      </ul> */}
    </div>
  )
}

export default ApiFetch;


//ReactでAPIにアクセスする方法は2つ
//①AXIOS（アクシオス）というサードパーティ製品を使う
//ターミナルにて「npm install axios」
//import axios from "axios";
//②JSのfetchメソッドを使う方法
//今回は両方実行する
//json placeholderにアクセスするとRoutesから100個のオブジェクトが取得できる