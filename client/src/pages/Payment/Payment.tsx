import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Payment.scss';
function Payment() {
  return (
    <>
    <Header />
    <div className="container-fluid">
      <h2>Token/Crypto asset withdrawal</h2>
      <div className="context">
        <form>
        <div className="mb-3 mt-3">
            <span className="sec_txt">Your payment has been processed successfully.</span><br />
            <span className="sec_txt">Please enter your wallet address.</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Crypto asset name</p>
            <span className="sec_txt">XXX</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Platform standard</p>
            <span className="sec_txt">ERC-20</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Quantity</p>
            <span className="sec_txt">12.0</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Sending address</p>
            <img src="./img/qrcode.svg" alt="" id="qr_code" />
            <p className="sec_txt">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
          </div>
          <input type="button" className="btn btn-warning" id="send" value="Send" />
          <div  className="mb-5 mt-3"></div>
          <input type="button" className="btn btn-dark" id="back" value="Back to home" />
        </form>  
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Payment;