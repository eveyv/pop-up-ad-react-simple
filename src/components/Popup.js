import React from "react"

const Popup = props => {

  const handleExit = () => {
    confirm("Are you sure you don't want to see YOUR FAVORITE ARTIST?!")
  }

  return(
    <div className="advertisement">

    <div className="xicon" onClick={handleExit}>
    <i className="fas fa-times"
      type="submit"
    />
    </div>

    <h1 className="content">You have won tickets to see YOUR FAVORITE ARTIST!</h1>
      <p className="content">GIVE US YOUR EMAIL AND YOUR SOUL:</p>

    <form>
      <label className="email"></label>
      <input className="field"
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email here, we'll come for your soul later!"
      />

      <input
        type="submit"
        value="Claim your prize!"
        className="button"
        />
    </form>

    </div>
  );
};

export default Popup
