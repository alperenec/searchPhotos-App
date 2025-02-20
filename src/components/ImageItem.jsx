import { useState, useEffect } from "react";

function ImageItem({ imageProp, setUpdateTrigger }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some((fav) => fav.id === imageProp.id));
  }, []);

  

  const toggleFavorite = () => {
    let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      storedFavorites = storedFavorites.filter((fav) => fav.id !== imageProp.id);
    } else {
      storedFavorites.push(imageProp);
    }

    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    setIsFavorite(!isFavorite);
    setUpdateTrigger((prev) => !prev);
  };

  return (
    <div className="image-card">
      <img src={imageProp.urls.small} alt={imageProp.description} onClick={() => setShowModal(true)} />
      <button className={`favorite-btn ${isFavorite ? "active" : ""}`} onClick={toggleFavorite}>
        ❤️
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
            <img src={imageProp.urls.regular} alt={imageProp.description} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageItem;
