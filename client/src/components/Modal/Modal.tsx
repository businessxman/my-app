import React from "react";
import './Modal.scss';
export default function Modal() {
  return (
    <div className="modal fade" id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <h4 className="modal-title">Do you really approve?</h4>
          <span className="mbody mt-3 mb-3">Click the Confirm button to automatically send the certificate PDF, Click the Cancel button to cancel the approval.</span>
          <div className="mfooter">
            <button type="button" className="btn btn-dark"    data-bs-dismiss="modal">YES</button>
            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">NO</button>
          </div>
        </div>
      </div>
    </div>
  );
}