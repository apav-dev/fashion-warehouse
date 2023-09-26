import { ImageType } from "../types/autogen";
import Container from "../components/atoms/Container";
import Image from "../components/atoms/Image";

export interface ImageGalleryProps {
  images: ImageType[];
}

// TODO ask about placeholder images
export const initialProps: ImageGalleryProps = {
  images: [
    {
      url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x612.png",
    },
    {
      url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x300.png",
    },
    {
      url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x300.png",
    },
    {
      url: "https://a.mktgcdn.com/p-sandbox/SPRRm-cAcTNOv8T8o2EpJ3z5N1nl0x3yL8YAK753KVc/300x612.png",
    },
  ],
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <Container
      layout="grid"
      className={`mx-auto mt-6 max-w-2xl px-0 py-0 sm:grid-cols-1 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8`}
    >
      <Image
        image={images[0]}
        className={`aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg sm:max-h-[480px] lg:block`}
      />
      <Container
        layout="grid"
        className={`hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:py-0`}
      >
        <Image
          image={images[1]}
          className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]"
        />
        <Image
          image={images[2]}
          className={`aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]`}
        />
      </Container>
      <Image
        image={images[3]}
        className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:max-h-[480px]"
      />
    </Container>
  );
};

export default ImageGallery;
