import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import ProductCard from '../Component/Product/ProductCard';
import axios from "axios";

const productDetails = [
    {"id":"0","name": "iPhone 13", "price": "1.00", "brief_details": "A13 Bionic, 6.1-inch Retina display"},
    {"id":"1","name": "Samsung Galaxy S21", "price": "1.00", "brief_details": "Exynos 2100, 6.2-inch Dynamic AMOLED 2X"},
    {"id":"2","name": "Google Pixel 6", "price": "1.00", "brief_details": "Google Tensor, 6.4-inch OLED display"},
    {"id":"3","name": "OnePlus 9 Pro", "price": "1.00", "brief_details": "Snapdragon 888, 6.7-inch Fluid AMOLED"},
    {"id":"4","name": "Xiaomi Mi 11", "price": "1.00", "brief_details": "Snapdragon 888, 6.81-inch AMOLED"},
    {"id":"5","name": "Sony Xperia 1 III", "price": "1.00", "brief_details": "Snapdragon 888, 6.5-inch 4K OLED"},
    {"id":"6","name": "LG Velvet 2 Pro", "price": "1.00", "brief_details": "Snapdragon 888, 6.8-inch OLED"},
    {"id":"7","name": "Asus Zenfone 8", "price": "1.00", "brief_details": "Snapdragon 888, 5.9-inch AMOLED"}
];

const Home = () => {

    const checkOutHandler = async (amount) =>{
        const {data : { key }} = await axios.get("http://localhost:3500/api/v2/getKey");
        const {data:{order} } = await axios.post("http://localhost:3500/api/v2/checkOut",{
            amount
        })

        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Payment Testing",
            description: "Test Transaction",
            image: "https://cdn.pixabay.com/photo/2013/07/12/19/32/rupees-154955_1280.png", // this is for logo 
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `http://localhost:3500/api/v2/paymentVerification/${order.id}`,
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
       
        const razor = new window.Razorpay(options);
        razor.open();

        
    }

  return (
    <>
        <Navbar />

         <div className="container">
        <div className="row">
          {
            productDetails.map((productData, index)=>
              <ProductCard className="col-md-3 col-lg-3 col-3 border border-info-subtle rounded m-1 p-2 h-25" checkOutHandler={checkOutHandler}  data={productData}/>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home
