import React from 'react'

const ProductCard = (props) => {
  const { data, className, checkOutHandler } = props;
  return (
    <>
      <div className={`${className} `} key={data.id}>
        <img src={`https://cdn1.smartprix.com/rx-i7gEhTxnr-w1200-h1200/7gEhTxnr.jpg`} className="card-img-top" alt="..." style={{width:250}}/>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h5 className="card-title mb-2"> ₹ {data.price}</h5>
          <button className="btn btn-primary shadow-none" onClick={()=>checkOutHandler(data.price) }>Payment</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard;