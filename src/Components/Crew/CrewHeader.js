export default function CrewHeader({ details: crew, headerClass }) {
  return (
    <section className={headerClass}>
      <img
        alt="crew"
        src={crew.images.webp.slice(1)}
        className="mx-auto h-full lg:w-auto lg:h-auto"
      />
      <hr className="border-[#383b4b] md:hidden" />
    </section>
  );
}
