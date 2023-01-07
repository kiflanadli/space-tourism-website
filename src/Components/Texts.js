export function BodyText(props) {
  return (
    <p className="text-2sm md:text-base lg:text-lg normal-case">
      {props.children}
    </p>
  );
}
