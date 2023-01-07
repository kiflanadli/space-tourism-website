export default function DestinationHeader({ destination }) {
  return (
    <div>
      <img
        alt="destination"
        src={destination.images.webp.slice(1)}
        className="mx-auto"
      />
    </div>
  );
}
