import { SubmitHandler, useForm } from "react-hook-form";
import { Genre } from "./GenresRow";
import { useCreateGenre } from "./hooks/useCreateGenre";
import Form from "../../ui/Form/Form";
import { FormRow, FormRowStyles } from "../../ui/Form/FormRow";
import Input from "../../ui/Form/Input";
import Button from "../../ui/Button";
import { useEditGenre } from "./hooks/useEditGenre";

type FormValues = {
  name: string;
};

interface ICreateCabinFormProp {
  genreToEdit?: Genre;
  onCloseModal?: () => void;
}

export const CreateGenreForm = ({
  genreToEdit,
  onCloseModal,
}: ICreateCabinFormProp) => {
  const isEditSession = Boolean(genreToEdit?.id);
  const { isCreating, createGenre } = useCreateGenre();
  const { isEditing, editGenre } = useEditGenre();
  const isLoading = isCreating || isEditing;
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: isEditSession
      ? {
          name: genreToEdit?.name,
        }
      : {},
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!isEditSession) {
      createGenre(data.name, {
        onSuccess: () => {
          onCloseModal?.();
        },
      });
    } else {
      editGenre(
        { name: data.name, id: genreToEdit?.id! },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow id="name" label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", {
            required: "Name field is required",
            min: 3,
          })}
        />
      </FormRow>
      <FormRowStyles>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>
          {" "}
          {isEditSession ? "Edit Genre" : "Create New Genre"}
        </Button>
      </FormRowStyles>
    </Form>
  );
};
