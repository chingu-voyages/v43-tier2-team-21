import Modal from "../UI/Modal";
import React from "react";
import Button from "../UI/Button/Button";

const EmptyModal = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(true);

  function toggleModal() {
    setModalIsOpen((prev) => !prev);
  }

  return (
    <>
      {modalIsOpen && (
        <Modal
          onClick={toggleModal}
          className=" bg-teal-200 rounded-lg text-center p-8 w-800 "
        >
          <h2 className="font-bold">You haven't created any tasks yet</h2>
          <p className="mb-4 text-sm">Would you like to create one?</p>
          <Button className="bg-white shadow-lg">Create Task</Button>
        </Modal>
      )}
    </>
  );
};

export default EmptyModal;
