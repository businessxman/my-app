import './SignUp.scss';



function SignUp() {
  return(
    <>
    <div className="container-fluid">
      <h2>Token/Crypto asset withdrawal</h2>
      <div className="context">
        <form>
          <div className="mb-3 mt-3 corporation">
            <input className="form-control" list="names" id="name" placeholder="Desired to take back crypto asset name" />
            <datalist id="names">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>    
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3 mt-3 applicant">
            <input type="text" className="form-control" placeholder="Applicant name" id="applicant" />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3 mt-3 email">
            <input type="email" className="form-control" placeholder="Email" id="email" />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3 mt-3 phone">
            <input type="phone" className="form-control" placeholder="Phone Number" id="phone" />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" id="agree" />
              <label className="form-check-label">I agree to the terms of use and the handling of personal information.</label>
            </label>
          </div>
          <input type="button" className="btn btn-dark" id="signup" value="Sign up" />
        </form>  
      </div>
    </div>
    </>
  );
}

export default SignUp;