import { useState } from "react";
import DebtsContainer from "./components/Debts/DebtsContainer";

// Tämän avulla mahdollista käyttää vain yhtä taulukkoa sekä veloille että saataville.
// Velat ja saatavat saavat eri tyypin, jonka avulla tarkistetaan kumpaan diviin ne renderöidään.
const DEBTS = Object.freeze({
  TO: 0,
  FROM: 1,
});

// Otsikoille
const LOANED_FROM = "Velat";
const LOANED_TO = "Saatavat";

function App() {
  const [debts, setDebts] = useState([]);

  // Lisää taulukon loppuun uuden velka-objektin
  const addDebtHandler = (debt) => {
    setDebts((prevDebts) => {
      return [...prevDebts, debt];
    });
  };

  // Palauttaa uuden taulukon josta on poistettu ID:n mukainen objekti
  const deleteDebtHandler = (debtID) => {
    setDebts((prevDebts) => {
      return prevDebts.filter((debt) => debt.id !== debtID);
    });
  };

  return (
    <div className="main">
      <DebtsContainer
        header={LOANED_FROM}
        debts={debts}
        loanType={DEBTS.TO}
        onAddDebt={addDebtHandler}
        onDeleteDebt={deleteDebtHandler}
      />

      <DebtsContainer
        header={LOANED_TO}
        debts={debts}
        loanType={DEBTS.FROM}
        onAddDebt={addDebtHandler}
        onDeleteDebt={deleteDebtHandler}
      />
    </div>
  );
}

export default App;
