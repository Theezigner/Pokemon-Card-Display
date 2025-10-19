import { ModeToggle } from "../components/modeToggle";
import { Outlet } from "@tanstack/react-router";

export function Layout() {
  return (
    <main className="max-w-6xl mx-auto p-2 relative">
      <header className="flex flex-col">
        <ModeToggle />
        <h1 className="md:text-4xl text-2xl font-bold mt-10 mb-2 text-center">
          Pokemon Cards
        </h1>
      </header>
      <Outlet />
    </main>
  );
}
