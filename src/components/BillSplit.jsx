import { useState } from "react";
import Button from "./Button";

function BillSplit({chosenFriend }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = billValue - yourExpense;
  const [whoWillPay, setWhoWillPay] = useState("user");

  if (chosenFriend === null) return null;

  function handleBillValue(e) {
    setBillValue(Number(e.target.value));
  }

  function handleYourExpense(e) {
    setYourExpense(
      Number(e.target.value) > billValue ? yourExpense : Number(e.target.value)
    );
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bil with {chosenFriend}</h2>
      <label>💲 Bill value</label>
      <input value={billValue} onChange={handleBillValue} type="text" />

      <label>🕺 Your expense</label>
      <input value={yourExpense} onChange={handleYourExpense} type="text" />

      <label>👫 {chosenFriend}'s expense</label>
      <input value={friendExpense} type="text" disabled />

      <label>👨 Who is paying the bill?</label>
      <select value={whoWillPay} onChange={setWhoWillPay}>
        <option value="user">You</option>
        <option value="friend">{chosenFriend}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default BillSplit;
