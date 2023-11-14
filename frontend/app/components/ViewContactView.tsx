"use client";

import { useMutation, useQuery } from "react-query";
import contactService from "../services/contactService";
import GoBackButton from "./GoBackButton";
import { useRouter } from "next/navigation";
import { queryClient } from "./QueryProvider";

export default function ViewContactView({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery(
    "contacts",
    contactService.getAll
  );
  const router = useRouter();

  const { mutate } = useMutation(contactService.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries("contacts");
    },
  });

  if (error instanceof Error && error) return <div>{error.message}</div>;
  if (isLoading) return <div>...loading</div>;
  const contact = data?.find((d) => d.id === id);
  if (!contact) return <div>Contact not found</div>;

  function handleDelete() {
    if (!contact) return;
    mutate(contact.id);
    router.back();
  }

  return (
    <div className="w-full h-screen p-4">
      <div className="flex p-2">
        <GoBackButton />
      </div>
      <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
        <h2 className="black">{contact?.name}</h2>
        <h3>{contact?.phoneNumber}</h3>
        <h3>{contact?.email}</h3>
        <div className="flex gap-2">
          <button
            className="flex bg-blue-400 p-2 rounded"
            type="button"
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            className="flex bg-yellow-400 p-2 rounded"
            type="button"
            onClick={() => router.push(`/dashboard/${id}/edit`)}
          >
            Edit
          </button>
          <button
            className="flex bg-red-400 p-2 rounded"
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
