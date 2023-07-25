import { SubmitHandler, useForm } from "react-hook-form";
import { Genre } from "./GenresRow";
import { useCreateGenre } from "./useCreateGenre";
import Form from "../../ui/Form/Form";
import { FormRow, FormRowStyles } from "../../ui/Form/FormRow";
import Input from "../../ui/Form/Input";
import Button from "../../ui/Button";

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

  const { register, handleSubmit, reset, getValues, formState } =
    useForm<FormValues>({
      defaultValues: isEditSession
        ? {
            name: genreToEdit?.name,
          }
        : {},
    });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    createGenre(data.name, {
      onSuccess: (data) => {
        console.log(data);
        onCloseModal?.();
      },
    });
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
          disabled={isCreating}
          {...register("name", {
            required: "Name field is required",
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
        <Button disabled={isCreating}>Create new genre</Button>
      </FormRowStyles>
    </Form>
  );
};
