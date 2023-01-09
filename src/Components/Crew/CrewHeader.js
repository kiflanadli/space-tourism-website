export default function CrewHeader({ details: crew }) {
  return (
    <section className="h-[40vh] md:h-[50vh]">
      <img
        alt="crew"
        src={crew.images.webp.slice(1)}
        className="mx-auto h-full"
      />
      <hr className="border-[#383b4b] md:hidden" />
    </section>
  );
}
