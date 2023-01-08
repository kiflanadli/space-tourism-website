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
      containerClass="bg-technology-mobile sm:bg-technology-tablet md:bg-technology-desktop"
      label={{ id: "03", title: "space launch 101" }}
    >
      <nav>
        <NavList
          links={links}
          linkPath="/technology/"
          captions={captions}
          className="flex gap-5 justify-center"
          listClass="bg=transparent border-2 border-white-200 hover:border-white aspect-square w-14 rounded-full flex justify-center items-center"
          activeClass="bg-white border-white text-black-russian"
          textClass="text-sm tracking-sm md:text-base md:tracking-base"
        />
      </nav>
    </PageContainer>
  );
}
