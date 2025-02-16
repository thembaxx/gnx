import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

interface GalleryProps {
  files: File[];
}
function Gallery({ files }: GalleryProps) {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm py-2"
      >
        <CarouselContent className="gap-1.5 m-0 ">
          {files.map((file, index) => (
            <CarouselItem
              key={index}
              className="basis-auto p-0 h-16 w-16 border rounded-xl overflow-hidden"
            >
              <div>
                <Image
                  src={URL.createObjectURL(file)}
                  alt=""
                  height={64}
                  width={64}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Gallery;
