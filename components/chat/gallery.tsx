import { motion } from "motion/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { Button } from "../ui/button";

const CanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    color="currentColor"
    fill={"none"}
    {...props}
  >
    <path
      d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface GalleryProps {
  files: File[];
  onRemoveClick: (index: number) => void;
}
function Gallery({ files, onRemoveClick }: GalleryProps) {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm py-2"
      >
        <CarouselContent className="gap-1.5 m-0 ">
          <ul className="flex gap-2">
            {files.map((file, index) => (
              <motion.li layout key={index} transition={spring}>
                <CarouselItem className="basis-auto p-0 h-16 w-16 border rounded-xl overflow-hidden">
                  <div className="h-full w-full shrink-0 relative">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt=""
                      height={64}
                      width={64}
                      className="shrink-0 min-h-full"
                      style={{ objectFit: "cover" }}
                    />
                    <Button
                      className="rounded-full bg-black/60 backdrop-blur-sm absolute bottom-0.5 right-0.5 z-2 h-6 w-6"
                      size="icon"
                      variant="outline"
                      onClick={() => onRemoveClick(index)}
                    >
                      <CanceIcon className="!h-3 !w-3" />
                    </Button>
                  </div>
                </CarouselItem>
              </motion.li>
            ))}
          </ul>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

export default Gallery;
