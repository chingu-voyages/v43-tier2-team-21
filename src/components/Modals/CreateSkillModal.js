import Modal from "../UI/Modal";
import React from "react";
import SkillForm from "../SkillForm";

const CreateSkillModal = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(true);

  function toggleModal() {
    setModalIsOpen((prev) => !prev);
  }

  return (
    <>
      {modalIsOpen && (
        <Modal
          onClick={toggleModal}
          className="bg-sky-300 rounded-lg text-center w-800 p-8"
        >
          <SkillForm />
        </Modal>
      )}
    </>
  );
};

export default CreateSkillModal;
