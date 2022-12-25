import React, { useState } from "react";
const [state, setState] = useState("");
const Login = () => {
  state = {
    first: "",
    last: "",
    username: "",
    pass: "",
    confirm: "",
  };

  const handleChange = (e) => {
    const fields = Object.assign({}, state);
    fields[e.target.name] = e.target.value;
    setState({ ...fields });
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[50% ]">
        <text className="text-2xl">Register</text>
        <div className="flex mt-3">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            type="text"
            placeholder="first name "
            name="first"
            value={state.username.first}
            onChange={handleChange}
            required
          />
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            type="text"
            placeholder="first name "
            name="last"
            value={state.username.last}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex mt-3">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            type="text"
            placeholder="username"
            name="pass"
            value={state.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            type="password"
            name="password"
            placeholder="password"
            value={state.pass}
            required
          />
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            type="password"
            name="password"
            placeholder="password"
            value={state.pass}
            required
          />
        </div>
        <input
          type="button"
          value="Login"
          className="btn mt-7 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export default Login;
//13:39
