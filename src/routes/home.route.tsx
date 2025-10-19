import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.route";
import { HomePage } from "../pages/homePage";
import { axiosInstance } from "../utils/axios";
import { ErrorComponent } from "../components/errorComponent";
import type { Card } from "../pages/homePage";
import { CardSkeleton } from "../components/cardsSkeleton";

export type HomeLoaderData = { cards: Card[] };

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,

  loader: (async (): Promise<HomeLoaderData> => {
    try {
      await delay(2000);
      const response = await axiosInstance.get("?limit=20");
      const pokemonCards = response.data.results;

      const cardsWithImages = await Promise.all(
        pokemonCards.map(async (pokemon: { name: string; url: string }) => {
          const detailResponse = await axiosInstance.get(pokemon.url);
          return {
            name: pokemon.name,
            imageUrl: detailResponse.data.sprites.front_default,
          };
        })
      );

      return { cards: cardsWithImages };
    } catch (error) {
      console.error("Error fetching Pokemon cards:", error);
      return { cards: [] };
    }
  }) satisfies () => Promise<HomeLoaderData>,

  pendingComponent: () => (
    <section
      role="status"
      aria-live="polite"
      className="p-4 text-center text-gray-500"
    >
      <CardSkeleton count={9} />
    </section>
  ),

  errorComponent: ({ error }) => <ErrorComponent error={error} />,
});
