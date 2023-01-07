export default function DestinationHeader({ destination }) {
  return (
    <div>
      <img
        alt="destination"
        src={destination.images.webp.slice(1)}
        className="mx-auto w-3/5 my-9"
      />
    </div>
  );
}
