"use client";
import { useMutation, useQuery } from "react-query";
import Form from "./Form";
import contactService, { IContact } from "../services/contactService";
import { useRouter } from "next/navigation";
import GoBackButton from "./GoBackButton";

export default function EditView({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery(
    "contacts",
    contactService.getAll
  );
  const {
    isLoading: mutLoading,
    error: mutError,
    data: mutData,
    mutate,
  } = useMutation({
    mutationFn: (data: IContact) => {
      return contactService.edit(id, data);
    },
  });
  const router = useRouter();

  if (error instanceof Error && error) return <div>{error.message}</div>;
  if (isLoading) return <div>...loading</div>;
  const contact = data?.find((d) => d.id === id);

  function handleSubmit(values: any) {
    mutate(values);
    console.log(mutData);
    router.push("/dashboard");
  }

  return (
    <div className="w-full h-screen p-4">
      <div className="flex p-2">
        <GoBackButton />
      </div>
      <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
        {!contact && "Contact not found"}
        {contact && (
          <Form
            onSubmit={handleSubmit}
            loading={mutLoading}
            defaultValues={contact}
          />
        )}
        {mutError instanceof Error && (
          <div className="flex p-4 bg-red-400">{mutError.message}</div>
        )}
      </div>
    </div>
  );
}
