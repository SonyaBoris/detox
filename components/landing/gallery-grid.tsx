type GalleryGridProps = {
  captions: string[];
};

export default function GalleryGrid({ captions }: GalleryGridProps) {
  return (
    <div className="gallery-grid">
      {captions.map((caption) => (
        <figure key={caption} className="gallery-card">
          <div className="gallery-placeholder" aria-hidden="true" />
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
