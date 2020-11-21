import React ,{useState} from 'react'

const Basic2 = () => {

  const [ products , setProducts ] = useState([]);
  const newProducts = () => {
    setProducts([
      ...products,
      {
      name:"Hello React",
      id:products.length,
      },
    ])
  }

  return (
    <div>
      <button onClick={newProducts}>Add New Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>name:{product.name}id:{product.id}</li>
        ))}
      </ul>

    </div>
  )
}

export default Basic2