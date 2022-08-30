import React, { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import useTooltip from "../../hooks/useTooltip";
import Tooltip from "../../components/useTooltip";
import './Request.scss';
function Request() {
  const { showTooltip, hideTooltip } = useTooltip();
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef<HTMLElement>();

  const handleClick = (elRef: any) => {
    const { y, x } = elRef.current.getBoundingClientRect();
    const elementTitle = elRef?.current?.title;
    showTooltip(y - 60, x, `${elementTitle}`);
  };

  const handleClick_ = () => {
    hideTooltip();
  }

  return (
    <>
    <Header />
    <div className="container-fluid">
      <h2>Requested list</h2>
      <div className="context">
        <div className="req_table">
          <table className="table" id="request">
            <thead>
              <tr>
                <th>Fullname</th>
                <th 
                  ref={leftBtnRef as React.RefObject<HTMLTableHeaderCellElement>}
                  onMouseOver={() => handleClick(leftBtnRef)}
                  onMouseLeave={handleClick_}
                  title="Crypto Asset Name">CAN</th>
                <th>Telephone</th>
                <th>Quantity</th>
                <th>Sending address</th>
                <th>Situation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XX XX</td>
                <td>XXXXXXXXX</td>
                <td>0123456789</td>
                <td>3.2</td>
                <td>1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</td>
                <td><input type="button" className="btn btn-dark" value="Approve" data-bs-toggle="modal" data-bs-target="#myModal" /></td>
              </tr>
              <tr>
                <td>XX XX</td>
                <td>XXXXXXXXX</td>
                <td>0123456789</td>
                <td>3.2</td>
                <td>1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</td>
                <td><input type="button" className="btn btn-dark" value="Approve" /></td>
              </tr>
              <tr>
                <td>XX XX</td>
                <td>XXXXXXXXX</td>
                <td>0123456789</td>
                <td>3.2</td>
                <td>1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</td>
                <td>
                  <input type="button" className="btn btn-dark" value="Approve" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modal />
      </div>
    </div>
    <Tooltip />
    <Footer />
    </>
  );
}

export default Request;