import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Form from "../../ui/Form/Form";
import { FormRow, FormRowStyles } from "../../ui/Form/FormRow";
import Input from "../../ui/Form/Input";
import Button from "../../ui/Button";
import { useEditMovie } from "./useEditMovie";
import { Movie } from "../../types/Movie";
import { useCreateMovie } from "./useCreateMovie";
import FileInput from "../../ui/Form/FileInput";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
type FormValues = {
  title: string;
  poster: string;
  showcasing: boolean;
  datePremiere: Date;
};

interface ICreateMovieFormProp {
  movieToEdit?: Movie;
  onCloseModal?: () => void;
}

export const CreateMovieForm = ({
  movieToEdit,
  onCloseModal,
}: ICreateMovieFormProp) => {
  const isEditSession = Boolean(movieToEdit?.id);
  const { isCreating, createMovie } = useCreateMovie();
  const { isEditing, editMovie } = useEditMovie();
  const isLoading = isCreating || isEditing;
  const { register, handleSubmit, reset, formState, control } =
    useForm<FormValues>({
      defaultValues: isEditSession
        ? {
            title: movieToEdit?.title,
            poster: movieToEdit?.poster,
            showcasing: movieToEdit?.showcasing,
            datePremiere: movieToEdit?.datePremiere,
          }
        : {},
    });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!isEditSession) {
      createMovie(data, {
        onSuccess: () => {
          onCloseModal?.();
        },
      });
    } else {
      editMovie(
        { id: movieToEdit!.id, movie: data },
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
      <FormRow id="name" label="Movie name" error={errors?.title?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("title", {
            required: "Title field is required",
            min: 5,
          })}
        />
      </FormRow>
      <FormRow
        id="datePremiere"
        label="Release Date"
        error={errors?.datePremiere?.message}
      >
        <Controller
          control={control}
          name="datePremiere"
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />
      </FormRow>
      <FormRow id="image" label="Movie Photo" error={errors?.poster?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("poster", {
            required: isEditSession ? false : "Image field is required",
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
          {isEditSession ? "Edit Movie" : "Create New Movie"}
        </Button>
      </FormRowStyles>
    </Form>
  );
};
