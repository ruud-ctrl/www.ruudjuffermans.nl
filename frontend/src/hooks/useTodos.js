import { useGetQuery, usePostMutation, usePutMutation, useDeleteMutation } from "@utils/apiHooks";
import { useErrorSnackbar, useSuccessSnackbar } from "@hooks/useSnackbar";

export const useTodos = () => {
  const setSuccess = useSuccessSnackbar();
  const setError = useErrorSnackbar();

  const todos = useGetQuery(["todos"], "/todos");

  // const createExerciseMutation = usePostMutation(["todos"], "/exercise", ["todos"]);
  // const updateExerciseMutation = usePutMutation(["todos"], ({ id }) => `/exercise/${id}`, ["todos"]);
  // const deleteExerciseMutation = useDeleteMutation(["todos"], ({ id }) => `/exercise/${id}`, ["todos"]);

  // const handle = async (fn, data, successMsg, errorMsg) => {
  //   try {
  //     await fn(data);
  //     setSuccess(successMsg);
  //   } catch (err) {
  //     setError(errorMsg);
  //   }
  // };

  return {
    todos,
    // addExercise: (data) => handle(createExerciseMutation, data, "Exercise created!", "Failed to create exercise."),
    // updateExercise: (data) => handle(updateExerciseMutation, data, "Exercise updated!", "Failed to update exercise."),
    // deleteExercise: (data) => handle(deleteExerciseMutation, data, "Exercise deleted!", "Failed to delete exercise."),
  };
};
