import { useWindowDimensions } from "../../Hooks/useWindowDimensions";

export default function TechnologyHeader({ technology }) {
  const { width } = useWindowDimensions();
  let imgUrl =
    width > 1024
      ? technology.images.portrait.slice(1)
      : technology.images.landscape.slice(1);
  return (
    <div className="my-9 mx-[-1.5rem] overflow-hidden">
      <img
        alt="technology"
        src={imgUrl}
        className="mx-auto h-auto w-full aspect-[2.47] lg:aspect-auto"
      />
    </div>
  );
}
