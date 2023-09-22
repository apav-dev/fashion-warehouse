import { cva } from "cva";
import { cn } from "../../utils";
import { ImageType } from "../../types/autogen";

const publicImageVariants = cva("h-full w-full object-cover object-center", {
  variants: {
    aspectRatio: {
      "1:1": "aspect-w-1 aspect-h-1",
      "4:3": "aspect-w-4 aspect-h-3",
      "3:2": "aspect-w-3 aspect-h-2",
      "5:3": "aspect-w-5 aspect-h-3",
      "16:9": "aspect-w-16 aspect-h-9",
      "3:1": "aspect-w-3 aspect-h-1",
      "2:3": "aspect-w-2 aspect-h-3",
      "5:7": "aspect-w-5 aspect-h-7",
      "4:5": "aspect-w-4 aspect-h-5",
      "4:1": "aspect-w-4 aspect-h-1",
      "16:10": "aspect-w-16 aspect-h-10",
    },
  },
  defaultVariants: {
    aspectRatio: "1:1",
  },
});

export interface PublicImageProps {
  image?: ImageType;
  className?: string;
  aspectRatio?:
    | "1:1"
    | "4:3"
    | "3:2"
    | "5:3"
    | "16:9"
    | "3:1"
    | "2:3"
    | "5:7"
    | "4:5"
    | "4:1"
    | "16:10";
}

export const initialProps: PublicImageProps = {
  image: {
    url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x300.png",
    height: 300,
    width: 300,
  },
  className: "",
  aspectRatio: "1:1",
};

const PublicImage = ({ image, aspectRatio, className }: PublicImageProps) => {
  if (!image) {
    return null;
  }

  return (
    <div className={cn(publicImageVariants({ aspectRatio, className }))}>
      <img
        className="h-full w-full object-cover object-center"
        src={image.url}
        // image={image}
        // layout="aspect"
      />
    </div>
  );
};

export default PublicImage;