import { useRouter } from "next/navigation";
import { IContact } from "../domain/contact";
import { useMutation } from "react-query";
import contactService from "../services/contactService";
import { queryClient } from "./QueryProvider";

export function Contat({ contact }: { contact: IContact }) {
  const router = useRouter();

  const { mutate, isError, error, isLoading } = useMutation(
    contactService.delete,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("contacts");
      },
    }
  );

  function handleDelete() {
    mutate(contact.id);
    if (isError && error instanceof Error) alert(error.message);
  }

  return (
    <div className="flex items-center justify-between border border-black p-2 rounded">
      <h4>{contact.name}</h4>
      <div className="flex gap-2">
        <button
          className="flex bg-blue-400 p-2 rounded"
          onClick={() => router.push(`/dashboard/${contact.id}`)}
          type="button"
        >
          View
        </button>
        <button
          className="flex bg-yellow-400 p-2 rounded"
          onClick={() => router.push(`/dashboard/${contact.id}/edit`)}
          type="button"
        >
          Edit
        </button>
        <button
          className="flex bg-red-400 p-2 rounded"
          onClick={handleDelete}
          type="button"
        >
          {isLoading ? "...loading" : "Delete"}
        </button>
      </div>
    </div>
  );
}
