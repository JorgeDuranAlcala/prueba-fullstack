"use client";

import { useQuery } from "react-query";
import contactService from "../services/contactService";
import { useRouter } from "next/navigation";
import { Contat } from "./Contact";
import React, { useState } from "react";

export function Dashboard() {
  const { data, isLoading, error } = useQuery(
    "contacts",
    contactService.getAll
  );
  const router = useRouter();
  const [search, setSearch] = useState("");

  if (error instanceof Error && error) return <div>{error.message}</div>;
  if (isLoading) return <div>...loading</div>;

  const filteredContacts = data?.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col w-full p-8">
        <div className="flex w-full p-2">
          <form className="flex w-full gap-2" method="post">
            <input
              className="flex w-full border border-black rounded p-4"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="flex items-center justify-center bg-green-400 p-2 px-6 rounded"
              type="button"
              onClick={() => router.push("/dashboard/create")}
            >
              New
            </button>
          </form>
        </div>
        <div className="flex w-full flex-col gap-2 border border-black p-4 rounded-xl">
          {filteredContacts?.map((data) => (
            <Contat contact={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
