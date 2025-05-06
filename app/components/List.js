"use client"

import { ethers } from "ethers"

function List({ toggleCreate, fee, provider, factory }) {
  
  async function listHandler(e) {
    e.preventDefault();
    console.log("Form submitted")
  
    const form = new FormData(e.target);
    const name = form.get("name")
    const ticker = form.get("ticker")
  
    console.log("Name:", name, "Ticker:", ticker)
  
    const signer = await provider.getSigner()
  
    const transaction = await factory.connect(signer).create(name, ticker, { value: fee})
    await transaction.wait()
  }
  

  return (
    <div className="list">
      <h2>list new token</h2>

      <div className="list_description">
        <p>fee: {ethers.formatUnits(fee,18)} ETH</p>
      </div>

      <form onSubmit={listHandler}>
        <input type="text" name="name" placeholder="name" autoComplete="off"/>
        <input type="text" name="ticker" placeholder="ticker" autoComplete="off"/>
        <input type="submit" value ="[ list ]" />
      </form>


      <button onClick={toggleCreate} className="btn--fancy">[ cancel ]</button>
    </div>
  );
}

export default List;