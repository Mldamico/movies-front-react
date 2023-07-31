import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./ui/Layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import Movies from "./pages/Movies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Actors } from "./pages/Actors";
import GlobalStyles from "./styles/GlobalStyles";
import { Genres } from "./pages/Genres";
import { NextReleases } from "./pages/NextReleases";
import { CinemaNow } from "./pages/CinemaNow";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/next-releases" element={<NextReleases />} />
            <Route path="/movies/on-cinema-now" element={<CinemaNow />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/genres" element={<Genres />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
