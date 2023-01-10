import { useWindowDimensions } from "../../Hooks/useWindowDimensions";

export default function TechnologyHeader({ details: technology, headerClass }) {
  const { width } = useWindowDimensions();
  let imgUrl =
    width >= 1024
      ? technology.images.portrait.slice(1)
      : technology.images.landscape.slice(1);
  return (
    <section className={headerClass}>
      <img
        alt="technology"
        src={imgUrl}
        className="mx-auto h-auto w-full lg:h-full lg:min-w-min aspect-[2.47] lg:aspect-auto"
      />
    </section>
  );
}
