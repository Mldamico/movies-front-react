import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { CreateGenreForm } from "./CreateGenreForm";

export const AddGenre = () => {
  return (
    <Modal>
      <Modal.Open opens="genre-form">
        <Button>Add new genre</Button>
      </Modal.Open>
      <Modal.Window name="genre-form">
        <CreateGenreForm />
      </Modal.Window>
    </Modal>
  );
};
