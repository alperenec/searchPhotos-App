import { useState, useEffect } from "react";

function Favorites({ updateTrigger }) {
  const [favorites, setFavorites] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [updateTrigger]);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((image) => image.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setSelectedImage(null);
  };

  return (
    <div className="favorites-container">
      <h2>Favorileriniz ❤️</h2>
      {favorites.length === 0 ? (
        <p>Henüz favori eklenmedi.</p>
        ) : (
        <div className="favorites-grid">
            {favorites.map((image) => (
            <div key={image.id} className="favorite-item">
                <img
                src={image.urls.small}
                alt={image.description}
                onClick={() => setSelectedImage(image)}
                />
            </div>
            ))}
        </div>
        )}


      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
            <img src={selectedImage.urls.regular} alt={selectedImage.description} />
            <button className="delete-btn" onClick={() => removeFavorite(selectedImage.id)}>🗑️</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
