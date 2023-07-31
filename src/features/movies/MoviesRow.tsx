import { styled } from "styled-components";
import { Movie } from "../../types/Movie";
import { Table } from "../../ui/Table";
import { format } from "date-fns";
import Modal from "../../ui/Modal";
import { Menus } from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteMovie } from "./useDeleteMovie";

const Img = styled.img`
  display: block;
  width: 15rem;
  object-fit: cover;
  object-position: center;
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

interface IMoviesRowProps {
  movie: Movie;
}

export const MoviesRow = ({
  movie: { id, title, datePremiere, poster },
}: IMoviesRowProps) => {
  const { deleteMovie, isDeleting } = useDeleteMovie();
  return (
    <Table.Row>
      <Img src={poster} />
      <Name>{title}</Name>
      <Name>{format(new Date(datePremiere), "dd MMM yyyy")}</Name>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            {/* <Modal.Window name="edit">
              <CreateMovieForm movieToEdit={movie} />
            </Modal.Window> */}

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="Movie"
                disabled={isDeleting}
                onConfirm={() => deleteMovie(id)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
};
