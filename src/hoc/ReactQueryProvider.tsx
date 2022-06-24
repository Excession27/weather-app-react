import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
