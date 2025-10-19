#  Pokémon Card Display App

A front-end evaluation project built to fetch, display, and manage pokemon card from the **Pokémon API (PokéAPI)** using a modern React stack. The application showcases abilities in data fetching, routing, state management, and responsive UI design with Tailwind CSS.

##  Features

- **API Data Fetching:** Loads a list of Pokémon from the PokéAPI.
- **Card-Based UI:** Displays each Pokémon as a responsive, stylized card with a subtle gradient border.
- **Loading State:** Implements a custom **Skeleton Loader** to provide a better perceived performance during data fetching.
- **Error Handling:** Dedicated error component for graceful failure during data loading.
- **Infinite Scrolling/Load More (Bonus):** Includes a "Load More" button for fetching additional Pokémon.
- **Search/Filter (Bonus):** Allows users to filter the displayed cards by name.
- **Routing:** Utilizes TanStack Router for type-safe, performance-optimized routing.
- **SEO/Head Management:** Uses `@unhead/react` for setting dynamic page titles and meta tags.

##  Tech Stack

- **Framework:** React.js (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with `daisyUI` for minor utilities)
- **Routing:** `@tanstack/react-router`
- **Data Fetching:** `axios`
- **Head Management:** `@unhead/react`

##  API Used

| API Name | Description | Base URL |
| :--- | :--- | :--- |
| **Pokémon API (PokéAPI)** | A comprehensive RESTful API for Pokémon data. | `https://pokeapi.co/api/v2/` |

---

##  Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

You need to have **Node.js** (LTS version recommended) and **npm** installed.

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Theezigner/Pokemon-Card-Display.git]
    cd pokemon-card-display
    ```

2.  **Install Dependencies:**
    This command installs all necessary packages listed in `package.json`.
    ```bash
    pnpm install
    ```

3.  **Run the Development Server:**
    This command starts the Vite development server.
    ```bash
    pnpm run dev
    ```

The application will typically be available at `http://localhost:5173` (or the port specified in your terminal).

### Build for Production

To create a production-ready build:
```bash
pnpm run build
```
