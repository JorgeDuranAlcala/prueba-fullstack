import GoBackButton from "@/app/components/GoBackButton";
import { QueryProvider } from "@/app/components/QueryProvider";
import ViewContactView from "@/app/components/ViewContactView";

export default function DashboardViewContact({
  params,
}: {
  params: { id: string };
}) {
  return <ViewContactView id={params.id} />;
}
