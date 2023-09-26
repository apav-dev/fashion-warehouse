import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import Main from "../components/Main";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import Heading from "../components/atoms/Heading";
// import Stars from "../components/atoms/Stars";
import Stars from "../components/atoms/Stars";
import StyledText from "../components/atoms/StyledText";
import ProductCard from "../components/molecules/ProductCard";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id-air-ascend",
    localization: { locales: ["en"] },
    filter: { entityIds: ["air-elite-ascend-7000"] },
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function AirAscend() {
  return (
    <>
      <Container
        layout="grid"
        className={`mx-auto mt-6 max-w-2xl px-0 py-0 sm:grid-cols-1 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8`}
      >
        <Image
          image={{
            "0": undefined,
            "1": undefined,
            "2": undefined,
            "3": undefined,
            "4": undefined,
            "5": undefined,
            "6": undefined,
            "7": undefined,
            "8": undefined,
          }}
          className={`aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg sm:max-h-[480px] lg:block`}
        />
        <Container
          layout="grid"
          className={`hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:py-0`}
        >
          <Image
            image={{
              "0": undefined,
              "1": undefined,
              "2": undefined,
              "3": undefined,
              "4": undefined,
              "5": undefined,
              "6": undefined,
              "7": undefined,
              "8": undefined,
            }}
            className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]"
          />
          <Image
            image={{
              "0": undefined,
              "1": undefined,
              "2": undefined,
              "3": undefined,
              "4": undefined,
              "5": undefined,
              "6": undefined,
              "7": undefined,
              "8": undefined,
            }}
            className={`aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:max-h-[225px]`}
          />
        </Container>
        <Image
          image={{
            "0": undefined,
            "1": undefined,
            "2": undefined,
            "3": undefined,
            "4": undefined,
            "5": undefined,
            "6": undefined,
            "7": undefined,
            "8": undefined,
          }}
          className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:max-h-[480px]"
        />
      </Container>
      <Main>
        <Container layout="grid" className={`mx-auto sm:grid-cols-1 sm:p-0`}>
          <Container className="lg:hidden">
            <Heading
              text="Product Name"
              rank="1"
              size="XXL"
              align="Left"
              color="Gray 900"
              fontWeight="Bold"
            />
          </Container>
          <Container layout="column" className={`gap-y-2 py-0`}>
            <StyledText
              text={`$0.00`}
              size="XL"
              weight="Medium"
              align="Left"
              color="Gray 900"
            />
            <Container layout="row" className={`gap-x-3 px-0 py-0 sm:p-0`}>
              <Stars rating={5} />
            </Container>
            <Button size="xxlarge" text={`Add To Cart`} className={`mt-4`} />
          </Container>
          <Container
            layout="column"
            className="py-2 sm:px-6 sm:py-2 lg:col-span-2 lg:row-start-1 lg:py-4"
          >
            <Heading
              className="hidden lg:block"
              text="Product Name"
              rank="1"
              size="XXL"
              align="Left"
              color="Gray 900"
              fontWeight="Bold"
            />
            <StyledText
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              size="M"
              weight="Medium"
              align="Left"
              color="Gray 700"
            />
          </Container>
        </Container>
        <Container>
          <Heading
            rank="4"
            size="L"
            color="Gray 900"
            fontWeight="Bold"
            text="Customers also purchased"
            align="Left"
          />
        </Container>
        <Container
          layout="grid"
          className="mt-6 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8"
        >
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            imageAlt="Front of men's Basic Tee in black."
            price="$35"
            color="Black"
          />
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
            imageAlt="Front of men's Basic Tee in white."
            price="$35"
            color="Aspen White"
          />
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
            imageAlt="Front of men's Basic Tee in charcoal."
            price="$35"
            color="Charcoal"
          />
          <ProductCard
            name="Basic Tee"
            href="#"
            imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
            imageAlt="Front of men's Basic Tee in iso dots."
            price="$35"
            color="Iso Dots"
          />
        </Container>
      </Main>
    </>
  );
}
