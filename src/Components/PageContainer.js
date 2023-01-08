import { Route, Switch } from "react-router-dom";
import { Heading5 } from "./Headings";

export default function PageContainer(props) {
  const { children, containerClass, page, pageData, Header, Body, label } =
    props;
  return (
    <div
      className={`text-center p-6 pt-20 min-h-screen bg-no-repeat bg-cover ${containerClass}`}
    >
      <Heading5>
        <span className="opacity-50 font-bold mr-5">{label.id}</span>
        {label.title}
      </Heading5>

      <div>
        <Switch>
          {pageData.map((d, index) => (
            <Route path={`/${page}/${index}`} key={index}>
              <Header details={d} />
            </Route>
          ))}
        </Switch>
        <div>
          {
            children // custom navigation
          }
          <Switch>
            {pageData.map((d, index) => (
              <Route path={`/${page}/${index}`} key={index}>
                <Body details={d} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}
