// ConnectButtonWithModal.jsx
import React, { useState } from "react";
import ConnectBtn from "./ConnectBtn";

const ConnectButtonWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center px-8 py-5 w-[133px] h-[52px] bg-[#1890FF] border-2 border-white font-poppins font-medium text-base leading-6 text-white hover:bg-[#1677d2] transition-colors duration-200"
      >
        Connect
      </button>

      {isModalOpen && <ConnectBtn closeModal={closeModal} />}
    </>
  );
};

export default ConnectButtonWithModal;
