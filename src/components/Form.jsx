import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <label>
          First Name:
          <input
            type="text"
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            value={name.firstName}
            id={"firstName"}
            autoComplete="on"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            value={name.lastName}
            id={"lastName"}
            autoComplete="on"
          />
        </label>
      </form>
    </div>
  );
}
