import { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import LoadMore from "./components/LoadMore";
import ThemeToggle from "./components/ThemeToggle";
import Favorites from "./components/Favorites"; 
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const handleSubmit = async (term) => {
    setSearchTerm(term);
    setPage(1);
    const result = await searchImages(term, 1);
    setImages(result);
  };

  const handleLoadMore = async () => {
    const result = await searchImages(searchTerm, page + 1);
    setImages([...images, ...result]);
    setPage(page + 1);
  };

  return (
    <div className="container">
      <ThemeToggle />
      <SearchHeader search={handleSubmit} />
      <Favorites updateTrigger={updateTrigger} />
      <ImageList imagesPlaceholder={images} setUpdateTrigger={setUpdateTrigger} />
      {images.length > 0 && <LoadMore onLoadMore={handleLoadMore} />}
    </div>
  );
}

export default App;
