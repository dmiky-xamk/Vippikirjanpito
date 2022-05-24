import "./DebtsContainer.css";
import Debts from "./Debts";
import DebtForm from "../DebtForm/DebtForm";

function DebtsContainer(props) {
  const countTotalDebt = () => {
    // Jos taulukko on tyhjä niin velkaa on 0
    if (!props.debts.length) return 0;

    // Muuten filteröidään taulukosta oikean tyypin lainat ja lasketaan ne yhteen
    return props.debts
      .filter((debt) => debt.type === props.loanType)
      .reduce((acc, debt) => acc + Number(debt.amount), 0);
  };

  return (
    <div className="debts-container">
      <h2 className="main-header">{props.header}</h2>
      <Debts
        debts={props.debts}
        loanType={props.loanType}
        onDeleteDebt={props.onDeleteDebt}
      />
      <DebtForm loanType={props.loanType} onAddDebt={props.onAddDebt} />
      <div className="debts-total">Yhteensä: {countTotalDebt()} €</div>
    </div>
  );
}

export default DebtsContainer;
