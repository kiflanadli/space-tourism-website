import NavList from "../Components/NavList";
import TechnologyHeader from "../Components/Technology/TechnologyHeader";
import TechnologyBody from "../Components/Technology/TechnologyBody";
import PageContainer from "../Components/PageContainer";

export default function Technology({ mainData: { technology } }) {
  const links = Object.keys(technology);
  const captions = technology.map((d, index) => (
    <span
      className="font-bellefair text-base md:text-2xl lg:text-4xl block"
      key={index}
    >
      {index + 1}
    </span>
  ));

  return (
    <PageContainer
      page="technology"
      pageData={technology}
      Header={TechnologyHeader}
      Body={TechnologyBody}
      containerClass="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop"
      label={{ id: "03", title: "space launch 101" }}
      articleClass="lg:flex-row-reverse lg:items-center lg:pt-0"
      sectionClass="md:flex-col-reverse lg:flex-row lg:max-w-[768px]"
      headerClass="-mx-6 md:-mx-10 lg:mx-0 lg:-mr-32 lg:basis-[45%] lg:shrink-0 lg:aspect-[0.8] overflow-hidden"
      bodyClass="md:max-w-[90%] mx-auto lg:mx-0"
    >
      <nav>
        <NavList
          links={links}
          linkPath="/technology/"
          captions={captions}
          className="flex gap-5 justify-center lg:flex-col lg:justify-around"
          listClass="bg=transparent border-2 border-white-200 hover:border-white aspect-square w-10 md:w-14 lg:w-20 rounded-full flex justify-center items-center"
          activeClass="bg-white border-white text-black-russian"
          textClass="text-sm tracking-sm md:text-base md:tracking-base"
        />
      </nav>
    </PageContainer>
  );
}
