"use client";
import EditView from "@/app/components/EditView";
import Form from "@/app/components/Form";
import { QueryProvider } from "@/app/components/QueryProvider";

export default function DashboardViewContact({
  params,
}: {
  params: { id: string };
}) {
  return <EditView id={params.id} />;
}
