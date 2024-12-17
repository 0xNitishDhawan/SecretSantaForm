import React from 'react';
import './Payment.css'; // Use the existing CSS for consistent styling

function QrCodeComponent() {

  return (
    <section className="qr-code-section">
      <div className="qr-code-message">
        <h2 className="qr-title">🎅 Santa Banta Fund 🎁</h2>
        <p>Apni shardhha ananu sar dal dey</p><br/>
        <p>Money will help us to organize the event better.</p>
        <p>Please send the screenshot to:</p>
        <p>Sonika - (9735252375)</p>
        <p>Whatsapp link: <a className='Whatsapp' href="https://wa.me/9735252375" target="_blank" rel="noopener noreferrer">Click Here</a></p>
        <br/>
        <p>This will help and support the organizing team to create a better event.</p>
      </div>

      <div className="qr-code-container">

      </div>
    </section>
  );
}

export default QrCodeComponent;
