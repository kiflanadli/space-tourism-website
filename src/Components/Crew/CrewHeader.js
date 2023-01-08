export default function CrewHeader({ crew }) {
  return (
    <div className="my-9 h-[40vh]">
      <img
        alt="crew"
        src={crew.images.webp.slice(1)}
        className="mx-auto h-full"
      />
      <hr className="border-[#383b4b]" />
    </div>
  );
}
