import React from "react";
import "./Payment.css"; // Use the existing CSS for consistent styling

function QrCodeComponent() {
  return (
    <section className="qr-code-section">
      <div className="qr-code-message">
        <h2 className="qr-title">🎅 Santa Banta Fund 🎁</h2>
        <p>"Apni shardha ke hisaab se shagun daal dey!" 🎉</p>
        <br />
        <p>
          Your generous contributions will help us add extra "masala" to the
          fun, ensuring the night is filled with better games, gifts, and
          jollier vibes.
        </p>
        <br />
        <p>Please send the screenshot to:</p>
        <p>Sonika - 9735252375</p>
        <p>
          Whatsapp link:{" "}
          <a
            className="Whatsapp"
            href="https://wa.me/9735252375"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </p>
        <br />
      </div>

      <div className="qr-code-container"></div>
    </section>
  );
}

export default QrCodeComponent;
