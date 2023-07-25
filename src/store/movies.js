import { create } from "zustand";

const useMovies = create((set) => ({
  myMovies: [],
  setMyMovies: (newMovies) => set((state) => ({ myMovies: newMovies })),
}));

export default useMovies;
