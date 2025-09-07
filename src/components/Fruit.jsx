export default function Fruit({ name, price }) {
  return (
    <>
      {price > 1 ? (
        <li>
          {" "}
          {name} ${price}{" "}
        </li>
      ) : null}
    </>
  );
}
