export function Heading1(props) {
  return <h1 className="font-bellefair font-10xl">{props.children}</h1>;
}

export function Heading2(props) {
  return <h2 className="font-bellefair font-8xl">{props.children}</h2>;
}

export function Heading3(props) {
  return <h3 className="font-bellefair font-6xl">{props.children}</h3>;
}

export function Heading4(props) {
  return <p className="font-bellefair font-4xl">{props.children}</p>;
}

export function Heading5(props) {
  return (
    <p className="font-barlow-condensed font-3xl tracking-3xl">
      {props.children}
    </p>
  );
}

export function SubHeading1(props) {
  return <p className="font-bellefair font-3xl">{props.children}</p>;
}

export function SubHeading2(props) {
  return (
    <p className="font-barlow-condensed font-sm tracking-sm">
      {props.children}
    </p>
  );
}
