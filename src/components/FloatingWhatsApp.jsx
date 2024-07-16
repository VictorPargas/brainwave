import React from "react";
import whatsappIcon from "../assets/svg/whatsappIcon.svg"; // Certifique-se de ter um ícone do WhatsApp

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/5511934509931";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      style={{ zIndex: 1000 }}
    >
      <img src={whatsappIcon} alt="WhatsApp" width={24} height={24} />
    </a>
  );
};

export default FloatingWhatsApp;
