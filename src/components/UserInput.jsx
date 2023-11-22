import React, { useState } from "react";

function UserInput() {

  const [value, setValue] = useState({
    initialInvestment: 10000,
    anuualInvestment: 1200,
    expectedReturn: 6,
    duration: 1
  })

  const handleChange = (inputIdentifier, newValue) => {
    setValue( (prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: newValue
      }
    })
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" value={value.initialInvestment} onChange={(e) => handleChange('initialInvestment', e.target.value )} required />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" value={value.anuualInvestment} onChange={(e) => handleChange('annualInvestment', e.target.value )} required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" value={value.expectedReturn} onChange={(e) => { console.log(e.target.value), handleChange('expectedReturn', e.target.value )}} required />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" value={value.duration} onChange={(e) => handleChange('duration', e.target.value )} required />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
