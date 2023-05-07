import React, { useState } from "react";
import { ethers } from "ethers";

function Rewards({
  title,
  subheading,
  text,
  id,
  standsleft,
  handlePledgeSubmitted,
  state
}) {
  const [radio, setRadio] = useState(false);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    if (e.target.value === "") {
      return;
    } else setInput(e.target.value);
  };

  const Transect = async (e) => {
    e.preventDefault();
    const { contract } =state;
    console.log(contract);
    const amount = { value: ethers.utils.parseEther(input) };
    console.log(amount);
    const transaction = contract.transfer("Gahan", "Nice", amount);
  }

  return (
    <>
      <div className="rewards-holder" id={id}>
        <div>
          <div className="radio-title">
            <div className="radio-btn" onClick={() => setRadio(!radio)}>
              {radio && <div className="radio-active"></div>}
            </div>

            <div className="title">
              <p className="main-title">{title}</p>
              <p className="sub-title"> {subheading} </p>
            </div>
          </div>
          <div className="reward-paragraph">
            <p> {text} </p>
          </div>
          <p className="rewards-left">
            {standsleft}
            <span>left</span>
          </p>
        </div>
        <div className="reward-line"> </div>
        <div className={radio ? "active" : "pledge"}>
          <p className="enter-pledge">Enter your pledge</p>
          <form
            className="reward-input--continue"
            onSubmit={() => handlePledgeSubmitted(id, input)}
          >
            <input
              type="number"
              placeholder="$"
              onChange={handleInput}
              value={input}
            />
            <button disabled={input === "" ? true : false} onClick={Transect}>Continue</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Rewards;