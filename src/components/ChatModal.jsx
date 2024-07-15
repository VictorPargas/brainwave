import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Biblioteca de ícones para o botão de fechar

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0); // Novo estado para controlar o passo da conversa

  useEffect(() => {
    // Abre o modal após 1 segundo quando a página é carregada
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const messageTimers = [
        { text: "Olá, tudo bem?", delay: 1000 },
        {
          text: "Seja muito bem-vindo à B1Soft. Sou o Eduardo, seu assistente virtual.",
          delay: 3000,
        },
        {
          text: "Quer receber uma proposta personalizada para sua empresa?",
          delay: 5000,
        },
      ];

      messageTimers.forEach((message, index) => {
        setTimeout(() => {
          setTyping(true);
          setTimeout(() => {
            setTyping(false);
            setMessages((prevMessages) => [
              ...prevMessages,
              { sender: "Eduardo", text: message.text },
            ]);
            if (index === messageTimers.length - 1) {
              setTimeout(() => {
                setShowButton(true);
              }, 1000);
            }
          }, 1500);
        }, message.delay);
      });
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    setShowButton(false);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "User", text: "Sim, quero receber" },
    ]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "Eduardo",
          text: "Para prosseguir, você poderia me dizer o seu nome? 😊",
        },
      ]);
      setShowInput(true);
      setStep(1); // Avança para o próximo passo
    }, 1500);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "User", text: inputValue },
      ]);
      const userName = inputValue.trim();
      setInputValue("");
      setShowInput(false);
      setTyping(true);

      setTimeout(() => {
        setTyping(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "Eduardo",
            text: `É um grande prazer poder falar com você, ${userName}.`,
          },
        ]);
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "Eduardo",
              text: "Em qual e-mail corporativo você gostaria de receber o nosso contato?",
            },
          ]);
          setShowInput(true);
          setStep(2); // Avança para o próximo passo
        }, 1500);
      }, 1500);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-80 p-4 shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40" // Imagem do avatar
            alt="Avatar"
            className="rounded-full w-10 h-10"
          />
          <div className="ml-3">
            <h2 className="font-semibold">Eduardo da B1Soft</h2>
            <p className="text-sm text-green-500">Online agora</p>
          </div>
        </div>
        <div className="space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                message.sender === "Eduardo"
                  ? "bg-blue-100 text-blue-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
          {typing && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500 italic">
                Eduardo está digitando...
              </p>
            </div>
          )}
        </div>
        {showButton && (
          <div className="mt-4 text-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={handleButtonClick}
            >
              Sim, Eu quero
            </button>
          </div>
        )}
        {showInput && (
          <div className="mt-4 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="flex-1 p-2 border rounded-l-lg"
              placeholder={step === 1 ? "Digite seu nome" : "Digite seu e-mail"}
            />
            <button
              onClick={handleSendClick}
              className="bg-blue-500 text-white py-2 px-4 rounded-r-lg"
            >
              Enviar
            </button>
          </div>
        )}
        {/* <div className="mt-4 text-center text-xs text-gray-400">
          Feito com <strong>Leadster</strong>
        </div> */}
      </div>
    </div>
  );
};

export default ChatModal;
