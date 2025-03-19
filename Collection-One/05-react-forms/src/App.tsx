import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [prompts, setPrompts] = useState([
    {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    },
  ]);

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleAddPrompt = () => {
    setPrompts([
      ...prompts,
      {
        prompt: "",
        answer: "",
        timestamp: new Date().getTime(),
      },
    ]);
  };

  const handlePrompt = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    i: number
  ) => {
    const { name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i] = { ...newPrompts[i], [name]: value }; // JSX Version -> newPrompts[i][name] = value;
    setPrompts(newPrompts);
  };

  const handleDeletePrompt = (i: number) => {
    let deletePrompts = [...prompts];
    deletePrompts.splice(i, 1);
    setPrompts(deletePrompts);
  };

  console.log(userInfo);
  console.log(prompts);

  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-md mx-auto">
        {/* static section */}
        <fieldset className="flex flex-col border rounded-xl py-1 px-4">
          <legend className="text-3xl font-semibold text-gray-600">
            About You
          </legend>
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

        {/* dynamic section */}
        <fieldset className="flex flex-col border rounded-xl  mt-6 py-1 px-4 mb-4">
          <legend className="text-3xl font-semibold text-gray-600">
            Prompts
          </legend>
          {prompts.map((prompt, i) => (
            <div key={prompt.timestamp}>
              <label className="text-xl font-medium mt-5">
                Select a prompt
              </label>
              <select
                name="prompt"
                id="prompt"
                onChange={(e) => handlePrompt(e, i)}
                className="border rounded text-base leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
              >
                <option value="">Select a prompt</option>
                <option value="Dating me is like">Dating me is like...</option>
                <option value="Facts about me that surprises people">
                  Facts about me that surprises people...
                </option>
                <option value="I want someone who">
                  I want someone who...
                </option>
                <option value="I spend most of my money on">
                  I spend most of my money on...
                </option>
                <option value="We're the same type of weired if">
                  We're the same type of weired if...
                </option>
              </select>
              <button
                className=" border bg-red-400 py-1 px-2 rounded-lg text-white font-semibold ml-9 "
                onClick={() => handleDeletePrompt(i)}
              >
                x
              </button>
              <textarea
                className="border border-dashed mt-4 px-2 mb-3 w-full"
                id="answer"
                name="answer"
                rows={5}
                placeholder="Let your through colors shine through"
                onChange={(e) => handlePrompt(e, i)}
              />
            </div>
          ))}

          <div className="w-full flex justify-center">
            <button
              className="border bg-indigo-400 py-1 px-2 rounded-lg text-white font-semibold"
              type="button"
              onClick={handleAddPrompt}
            >
              Add Prompt
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
