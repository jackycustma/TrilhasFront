import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      {Array.from({ length: 6 }).map((_, i) => (
        <img
          key={i}
          src={`https://via.placeholder.com/150?text=Imagem+${i + 1}`}
          alt={`Imagem ${i + 1}`}
        />
      ))}
    </div>
  );
}
