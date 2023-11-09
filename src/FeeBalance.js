// FeeBalance.js
import React from 'react';

const FeeBalance = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Fee Balances</h2>
      <p className = "flash-text"style={{color:'red'}}>Your outstanding fee balance is: Ksh.1,009,893</p>
      <p>Pay via:</p>
      <form>
        <div style={{ textAlign: 'center' }}>
          <button style={{ marginRight: '10px' }}>M-Pesa</button>
          <button style={{ marginRight: '10px' }}>Paypal</button>
          <button style={{ marginRight: '10px' }}>Airtel Money</button>
          <button>KCB Bank</button>
          </div>
      </form>
    </div>
  );
};

export default FeeBalance;
