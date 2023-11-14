"use client";

import { useMutation } from "react-query";
import Form from "./Form";
import GoBackButton from "./GoBackButton";
import contactService, { IContact } from "../services/contactService";
import { useRouter } from "next/navigation";
import { queryClient } from "./QueryProvider";

export function CreateView() {
  const {
    isLoading: mutLoading,
    error: mutError,
    data: mutData,
    mutate,
  } = useMutation({
    mutationFn: (data: IContact) => {
      return contactService.create(data);
    },
    onSuccess() {
      queryClient.invalidateQueries("contacts");
    },
  });
  const router = useRouter();

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
        <Form onSubmit={handleSubmit} loading={mutLoading} />
        {mutError instanceof Error && (
          <div className="flex p-4 bg-red-400">{mutError.message}</div>
        )}
      </div>
    </div>
  );
}
