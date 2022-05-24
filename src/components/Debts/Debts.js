import Debt from "./Debt";
import "./Debts.css";

// Taulukko-osa, jossa velat näytetään.
// Lähettää yksittäiset objektit Debt komponentille.
function Debts(props) {
  // Palauttaa taulukon johon on filtteröity joko velat tai saatavat
  const getCorrectLoansByType = () =>
    props.debts.filter((debt) => debt.type === props.loanType);

  return (
    <table className="debt-table">
      <thead>
        <tr>
          <th>Kenelle</th>
          <th>Summa</th>
        </tr>
      </thead>
      <tbody>
        {/* && -operaattori suorittaa debts-empty:n jos taulukon pituus on 0*/}
        {!getCorrectLoansByType().length && (
          <tr className="debts-empty">
            <td></td>
          </tr>
        )}
        {/* Jokainen velka luo oman Debt komponentin */}
        {/* Filtteröidyn taulukon objektit lähetetään renderöitäväksi */}
        {getCorrectLoansByType().map((debt) => (
          <Debt
            onDeleteDebt={props.onDeleteDebt}
            id={debt.id}
            key={debt.id}
            name={debt.name}
            amount={debt.amount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Debts;
