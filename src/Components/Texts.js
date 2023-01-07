export function BodyText(props) {
  return <p className="font-lg">{props.children}</p>;
}

export function NavText(props) {
  return (
    <p className="font-barlow-condensed font-base tracking-base">
      {props.children}
    </p>
  );
}
