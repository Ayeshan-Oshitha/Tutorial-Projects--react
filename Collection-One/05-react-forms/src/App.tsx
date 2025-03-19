import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  console.log(userInfo);

  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col border rounded-xl py-1 px-4">
          <legend className="text-3xl font-semibold">About You</legend>
          <label className="text-xl font-medium mt-5">What's your name?</label>
          <input
            className="border rounded text-base leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
            id="firstName"
            name="firstName"
            placeholder="First name"
            type="text"
            onChange={handleInput}
          />
          <input
            className="border rounded text-base leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            type="text"
            onChange={handleInput}
          />
          <label className="text-xl font-medium mt-5">What's your email?</label>
          <input
            className="border rounded text-base leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
            id="email"
            name="email"
            placeholder="email@example"
            type="email"
            onChange={handleInput}
          />
          <label className="text-xl font-medium mt-5">
            What's your date of birth?
          </label>
          <input
            className="border rounded text-base leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
            id="dob"
            name="dob"
            type="date"
            max="2005-01-27"
            placeholder="Date of birth"
            onChange={handleInput}
          />
          <label className="text-xl font-medium mt-5">
            What's your gender?
          </label>
          <select
            id="gender"
            name="gender"
            onChange={handleInput}
            className="border rounded text-base leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
          >
            <option>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="mtf">MTF</option>
            <option value="ftm">FTM</option>
            <option value="non-binary">Non-binary</option>
          </select>
        </fieldset>
      </form>
    </>
  );
}

export default App;
