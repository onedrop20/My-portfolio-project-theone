import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    return (
    <a
       href="https://wa.me/2348154219951"  // Replace with your WhatsApp number in international format
       target="_blank"
       rel="noopener noreferrer"
       className="whatsapp-button"
   >
       <i className="fab fa-whatsapp"></i>
    </a>
 );
};

export default WhatsAppButton;
