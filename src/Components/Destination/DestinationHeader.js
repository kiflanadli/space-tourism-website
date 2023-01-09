export default function DestinationHeader({ details: destination }) {
  return (
    <section>
      <img
        alt="destination"
        src={destination.images.webp.slice(1)}
        className="mx-auto w-3/5 md:w-1/2 aspect-square"
      />
    </section>
  );
}
