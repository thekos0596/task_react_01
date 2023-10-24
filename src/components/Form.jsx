import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
};

export default Form;
