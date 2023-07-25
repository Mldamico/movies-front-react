import { styled } from "styled-components";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { Menus } from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { Table } from "../../ui/Table";
import { useDeleteGenre } from "./useDeleteGenre";
import { LoadingSpinner } from "../../ui/LoadingSpinner";

const GenreStyleText = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  flex-grow: 2;
`;

export interface Genre {
  id: number;
  name: string;
}

interface GenresRowProps {
  genre: Genre;
  position: number;
}

export const GenresRow = ({ position, genre }: GenresRowProps) => {
  const { isDeleting, deleteGenre } = useDeleteGenre();

  if (isDeleting) return <LoadingSpinner />;

  return (
    <>
      <Table.Row>
        <p>{position}</p>
        <GenreStyleText>{genre.name}</GenreStyleText>
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={genre.id} />
              <Menus.List id={genre.id}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="Genres"
                  disabled={isDeleting}
                  onConfirm={() => deleteGenre(genre.id)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
};
