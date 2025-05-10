import Search from "./components/Search.jsx";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <main className="overflow-hidden">
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero" className="object-cover" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
          </h1>
        </header>

        <Search searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
    </main>
  );
};

export default App;
