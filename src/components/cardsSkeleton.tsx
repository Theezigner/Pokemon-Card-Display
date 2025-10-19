interface CardSkeletonProps {
  count?: number;
}

export function CardSkeleton({ count = 12 }: CardSkeletonProps) {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center p-4"
      aria-live="polite"
      aria-label="Loading cards"
    >
      {[...Array(count)].map((_, index) => (
        <article
          key={index}
          className="relative p-px rounded-lg shadow transition-shadow duration-200 
                     bg-gradient-to-r from-purple-700/70 to-blue-700/60 w-full max-w-sm"
        >
          <div className="h-full w-full p-4 bg-base-100 rounded-lg">
            <div className="flex items-center justify-center h-48 md:h-80 bg-gray-300 rounded-lg mb-3 animate-pulse"></div>

            <div className="mt-2 h-6 w-3/4 rounded mx-auto bg-gray-300 animate-pulse"></div>
          </div>
        </article>
      ))}
    </section>
  );
}
