function Hello({ helloObject }) {
  return (
    <div>
      <h1>
        {helloObject.message} {helloObject.name} {helloObject.emoji}{" "}
        {helloObject.numArray.join(", ")}
      </h1>
    </div>
  );
}

export default Hello;
