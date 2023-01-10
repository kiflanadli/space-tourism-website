import { Route, Switch } from "react-router-dom";
import { Heading5 } from "./Headings";

export default function PageContainer(props) {
  const {
    children,
    containerClass = "",
    page,
    pageData,
    Header,
    Body,
    label,
    articleClass = "",
    sectionClass = "",
    headerClass = "",
    bodyClass = "",
  } = props;
  return (
    <div
      className={`text-center p-6 pt-20 md:px-10 md:pb-0 md:pt-36 lg:px-32 min-h-screen bg-no-repeat bg-cover ${containerClass}`}
    >
      <div className="md:text-left">
        <Heading5>
          <span className="opacity-50 font-bold mr-5">{label.id}</span>
          {label.title}
        </Heading5>
      </div>

      <article
        className={`flex flex-col lg:flex-row lg:justify-between gap-9 md:gap-11 py-9 md:py-11 ${articleClass}`}
      >
        <Switch>
          {pageData.map((d, index) => (
            <Route path={`/${page}/${index}`} key={index}>
              <Header details={d} headerClass={headerClass} />
            </Route>
          ))}
        </Switch>
        <section
          className={`lg:text-left flex flex-col gap-9 md:gap-11 mx-auto lg:mx-0 md:max-w-[85%] ${sectionClass}`}
        >
          {
            children // custom navigation
          }
          <Switch>
            {pageData.map((d, index) => (
              <Route path={`/${page}/${index}`} key={index}>
                <Body details={d} bodyClass={bodyClass} />
              </Route>
            ))}
          </Switch>
        </section>
      </article>
    </div>
  );
}
