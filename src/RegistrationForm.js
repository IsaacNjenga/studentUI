// RegistrationForm.js
import React from 'react';

const RegistrationForm = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Class Registration</h2>
      
      <h2>Sign up for Classes!</h2>
      <form>
        <label>
          <input type="checkbox" /> APT 101
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" /> APT 102
        </label>
        <br/>
        <br />
        <label>
          <input type="checkbox" /> APT 103
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" /> APT 104
        </label>
        <br/>
        <br />
        <label>
          <input type="checkbox" /> APT 105
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" /> APT 106
        </label>
      </form>
    </div>
  );
};

export default RegistrationForm;
