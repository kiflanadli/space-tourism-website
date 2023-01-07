export function Heading1(props) {
  return (
    <h1 className="font-bellefair text-7xl md:text-10xl">{props.children}</h1>
  );
}

export function Heading2(props) {
  return (
    <h2 className="font-bellefair text-6xl md:text-7xl lg:text-8xl">
      {props.children}
    </h2>
  );
}

export function Heading3(props) {
  return (
    <h3 className="font-bellefair text-2xl md:text-5xl lg:text-6xl">
      {props.children}
    </h3>
  );
}

export function Heading4(props) {
  return (
    <p className="font-bellefair text-base md:text-2xl lg:text-4xl">
      {props.children}
    </p>
  );
}

export function Heading5(props) {
  return (
    <p className="font-barlow-condensed text-base md:text-xl lg:text-3xl tracking-3xl">
      {props.children}
    </p>
  );
}

export function SubHeading1(props) {
  return <p className="font-bellefair text-3xl">{props.children}</p>;
}

export function SubHeading2(props) {
  return (
    <p className="font-barlow-condensed text-sm tracking-sm">
      {props.children}
    </p>
  );
}
