import Image from "next/image";

export function Gallery() {
  const images = [
    "/bhogi/img1.jpg",
    "/bhogi/img2.jpg",
    "/bhogi/img3.jpg",
    "/bhogi/img4.jpg",
    "/bhogi/img5.jpg",
    "/bhogi/img6.jpg",
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow"
          >
            <Image
              src={src}
              alt={`Bhogi image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
