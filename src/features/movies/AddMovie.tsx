import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { CreateMovieForm } from "./CreateMovieForm";

export const AddMovie = () => {
  return (
    <Modal>
      <Modal.Open opens="movie-form">
        <Button>Add new movie</Button>
      </Modal.Open>
      <Modal.Window name="movie-form">
        <CreateMovieForm />
      </Modal.Window>
    </Modal>
  );
};
