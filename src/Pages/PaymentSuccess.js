import React from 'react';
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0];
    const referenceNo = searchQuery.get('reference');

  return (
    <div className='col-md-12 d-flex justify-content-center mt-5'>
        <div className="card text-bg-success mb-3 col-md-3" style={{maxWidth: "18rem;"}}>
            <div className="card-header">Order Details</div>
            <div className="card-body">
                <h5 className="card-title">Payment Successful</h5>
                <p className="card-text"> Rerference No. : { referenceNo }</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentSuccess
