import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder, setUpdateTrigger }) {
  return (
    <div className="image-list">
      {imagesPlaceholder.map((image) => (
        <ImageItem
          key={image.id}
          imageProp={image}
          setUpdateTrigger={setUpdateTrigger}  // <-- Prop olarak geç
        />
      ))}
    </div>
  );
}

export default ImageList;
