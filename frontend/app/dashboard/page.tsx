"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Dashboard } from "../components/Dashboard";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
