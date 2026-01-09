"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

// let ReactQueryDevtools: any = null;
// if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
//   ReactQueryDevtools =
//     require("@tanstack/react-query-devtools").ReactQueryDevtools;
// }
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
