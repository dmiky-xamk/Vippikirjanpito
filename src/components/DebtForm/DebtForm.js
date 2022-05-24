import { useState } from "react";
import "./DebtForm.css";

// Syöttökentät taulukon alapuolella.
// Huolehtii uuden objektin luomisesta ja palauttamisesta ylöspäin.
function DebtForm(props) {
  const [enteredName, setName] = useState("");
  const [enteredAmount, setAmount] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Luodaan uusi velka objekti
    const debtData = {
      type: props.loanType,
      id: Math.random().toString(),
      name: event.target.name.value,
      amount: event.target.amount.value,
    };

    // Lähetetään objekti parentille
    props.onAddDebt(debtData);

    // Nollataan syöttökentät
    setName("");
    setAmount("");
  };

  return (
    <form className="debt-form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Nimi</label>
        <input
          onChange={nameChangeHandler}
          value={enteredName}
          className="debt-table-input"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Summa</label>
        <input
          onChange={amountChangeHandler}
          value={enteredAmount}
          className="debt-table-input"
          type="number"
          name="amount"
          id="amount"
          required
        />
      </div>
      <button type="submit" className="debt-table-button">
        Lisää velka
      </button>
    </form>
  );
}

export default DebtForm;
