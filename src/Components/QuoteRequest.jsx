import React from "react";
import "./Style.css";

function QuoteRequest() {
  return (
    <div className="quote-container">
      {/* LEFT TEXT SECTION */}
      <div className="quote-left">
        <h2>An easy way to send <br />requests to all suppliers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="quote-right">
        <h3>Send quote to suppliers</h3>
        <input
          type="text"
          placeholder="What item you need?"
          className="input-field"
        />
        <textarea
          placeholder="Type more details"
          className="textarea-field"
        ></textarea>

        <div className="quantity-row">
          <input
            type="number"
            placeholder="Quantity"
            className="input-field"
          />
          <select className="select-field">
            <option>Pcs</option>
            <option>Kg</option>
            <option>Liters</option>
          </select>
        </div>

        <button className="send-btn">Send inquiry</button>
      </div>
    </div>
  );
}

export default QuoteRequest;
