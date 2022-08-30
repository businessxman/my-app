import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './WalletRegister.scss';
function WalletRegister() {
  return(
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
          <div className="mb-3 mt-3 quantity">
            <input type="txt" className="form-control" placeholder="Quantity" id="quantity" />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3 mt-3 address">
            <input type="txt" className="form-control" placeholder="Scheduled delivery address" id="address" />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <input type="button" className="btn btn-warning" id="register" value="Register" />
          <div  className="mb-5 mt-3"></div>
          <input type="button" className="btn btn-dark" id="back" value="Back to home" />
        </form>  
      </div>
    </div>
    <Footer />
    </>
  );
}

export default WalletRegister;