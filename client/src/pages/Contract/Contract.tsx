import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Contract.scss';
function Contract() {
  return (
    <>
    <Header />
    <div className="container-fluid">
      <h2>Token/Crypto asset withdrawal</h2>
      <div className="context">
        <form>
          <div className="mb-3 mt-3">
            <p className="sec_title">Crypto asset name</p>
            <span className="sec_txt">XXX</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Platform standard</p>
            <span className="sec_txt">ERC-20</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Full name</p>
            <span className="sec_txt">XXX XXXX</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Email address</p>
            <span className="sec_txt">example@gmail.com</span>
          </div>
          <div className="mb-3 mt-3">
            <p className="sec_title">Telephone number</p>
            <span className="sec_txt">123456789</span>
          </div>
          <div className="mb-3 mt-3">
            <span className="sec_txt">Application accepted.</span><br />
            <span className="sec_txt">Please make payment using the button below.</span>
          </div>
          <input type="button" className="btn btn-warning" id="apply" value="Apply by credit card" />
          <div  className="mb-3 mt-3 sites">
            <img src="./img/Group 107.svg" />
            <img src="./img/Group 106.svg" />
            <img src="./img/americanexpress.svg" />
          </div>
          <input type="button" className="btn btn-dark" id="back" value="Back to home" />
        </form>  
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contract;