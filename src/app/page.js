"use client";
import { getMyMovies, getNowPlaying, getPopularMovies } from "@/movies/api";
import { Navbar } from "./components/Navbar";
import Image from "next/image";
import { FeaturedMovie } from "./components/FeaturedMovie";
import { MovieList } from "./components/MovieList";

export default async function Home() {
  const featuredMovie = await getNowPlaying();
  const popularMovies = await getPopularMovies();
  const myMovies = typeof window !== "undefined" ? getMyMovies() : null;

  return (
    <main>
      <section className="max-h-full h-full relative overflow-hidden w-full bg-gradient lg:h-screen lg:bg-none">
        <Image
          src={`https://image.tmdb.org/t/p/original${featuredMovie?.backdrop_path}`}
          alt={featuredMovie?.title || "Movie title"}
          fill
          priority
          className="absolute -z-10 object-cover w-full h-screen"
          sizes="100vw"
          quality={100}
        />
        <section className="flex flex-col justify-between h-full w-full max-w-7xl mx-auto px-6 pt-6 pb-16 lg:py-4">
          <Navbar />
          <section className="flex flex-col h-full gap-4 items-center pt-32 lg:flex-row lg:pt-0">
            <FeaturedMovie featuredMovie={featuredMovie} />
            <MovieList
              popularMovies={popularMovies}
              myMovies={myMovies}
              className={"hidden lg:flex"}
            />
          </section>
        </section>
      </section>
      <MovieList
        popularMovies={popularMovies}
        myMovies={myMovies}
        className={"lg:hidden flex bg-secondary"}
      />
    </main>
  );
}
