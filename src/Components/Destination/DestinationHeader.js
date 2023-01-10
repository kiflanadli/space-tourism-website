export default function DestinationHeader({
  details: destination,
  headerClass,
}) {
  return (
    <section className={headerClass}>
      <img
        alt="destination"
        src={destination.images.webp.slice(1)}
        className="mx-auto w-3/5 md:w-1/2 lg:w-2/3 aspect-square"
      />
    </section>
  );
}
