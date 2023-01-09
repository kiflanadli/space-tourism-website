import { useWindowDimensions } from "../../Hooks/useWindowDimensions";

export default function TechnologyHeader({ details: technology }) {
  const { width } = useWindowDimensions();
  let imgUrl =
    width >= 1024
      ? technology.images.portrait.slice(1)
      : technology.images.landscape.slice(1);
  return (
    <section className="-mx-6 md:-mx-10 overflow-hidden">
      <img
        alt="technology"
        src={imgUrl}
        className="mx-auto h-auto w-full aspect-[2.47] lg:aspect-auto"
      />
    </section>
  );
}
