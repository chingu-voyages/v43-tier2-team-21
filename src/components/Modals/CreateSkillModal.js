import Modal from "../UI/Modal";
import React from "react";
import SkillForm from "../SkillForm";

const CreateSkillModal = ({ toggleAdding }) => {
  return (
    <Modal
      onClick={toggleAdding}
      className="bg-sky-100 rounded-lg text-center w-800 p-8"
    >
      <SkillForm closeModal={toggleAdding} />
    </Modal>
  );
};

export default CreateSkillModal;
