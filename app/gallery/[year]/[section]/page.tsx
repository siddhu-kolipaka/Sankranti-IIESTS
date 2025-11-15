import { photoGroups } from "../../data";
import GalleryClient from "./GalleryClient";

interface PageProps {
  params: Promise<{
    year: string;
    section: string;
  }>;
}

export default async function SectionPage({ params }: PageProps) {
  const { year, section } = await params;

  const decodedYear = decodeURIComponent(year);
  const decodedSection = decodeURIComponent(section);

  const yearData = photoGroups.find(item => item.year === decodedYear);

  if (!yearData) {
    return <div className="p-10 text-white text-3xl">Year not found: {decodedYear}</div>;
  }

  const images = yearData.sections[decodedSection as keyof typeof yearData.sections] || [];

  return (
    <main className="bg-black text-white">
      <GalleryClient
        images={images}
        year={decodedYear}
        section={decodedSection}
      />
    </main>
  );
}
