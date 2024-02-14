"use client";

import { useState } from "react";

const Modal = () => {
  return <div className="aspect-[200/200] w-[50%] bg-[blue]"></div>;
};

const DonationHome = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {showModal && <Modal onClick={toggleModal} />}
    </div>
  );
};

export default DonationHome;
