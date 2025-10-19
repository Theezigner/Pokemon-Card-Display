import { useState } from "react";
import { useLoaderData } from "@tanstack/react-router";

export type Card = {
  name: string;
  imageUrl: string;
};

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(10);
  const cardsPerLoad = 2;

  const { cards } = useLoaderData({ from: "/" }) as { cards: Card[] };

  // Search
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Displayed Count
  const displayedCards = filteredCards.slice(0, displayCount);
  const hasMore = displayCount < filteredCards.length;

  const loadMoreCards = () => {
    setDisplayCount((prevCount) => prevCount + cardsPerLoad);
  };

  return (
    <>
      <main className="min-h-screen px-4 py-10">
        <section className="mb-6 flex flex-col items-center gap-4">
          <form className="w-full max-w-md " aria-label="Search Cards">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setDisplayCount(4);
              }}
              aria-label="Search Card by title"
              placeholder="Search cards..."
              className="w-full px-4 py-2 border border-gray-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {displayedCards.map((card) => (
            <article
              key={card.name}
              className="relative p-px rounded-lg shadow transition-shadow duration-200 
            bg-gradient-to-r from-purple-700/80 to-blue-700/70"
            >
              <div className="h-full w-full p-4 bg-base-100 rounded-[calc(0.5rem-1px)]">
                <div className="flex items-center justify-center bg-base-200 rounded mb-3">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-80 h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <h2 className="mt-2 text-lg font-semibold text-center capitalize">
                  {card.name}
                </h2>
              </div>
            </article>
          ))}
        </section>

        {hasMore && (
          <nav
            className="mt-10 flex justify-center items-center gap-4"
            aria-label="Pagination Navigation"
          >
            <button
              className="btn btn-primary  absolute border border-gray-500/20 hover:shadow-lg rounded p-2"
              onClick={loadMoreCards}
              aria-label="Load more Cards"
            >
              Load More
            </button>
          </nav>
        )}
        {!hasMore && displayedCards.length > 0 && (
          <p className="mt-8 text-center text-gray-500">
            You've reached the end! ({filteredCards.length} cards total)
          </p>
        )}
      </main>
    </>
  );
}
