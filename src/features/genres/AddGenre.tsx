import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { CreateGenreForm } from "./CreateGenreForm";

export const AddGenre = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new genre</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateGenreForm />
      </Modal.Window>
    </Modal>
  );
};
