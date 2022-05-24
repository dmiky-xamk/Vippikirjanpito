import "./Debt.css";

// Näyttää yksittäiset velka-objektit.
function Debt(props) {
  // ID jota käytetään poistettaessa etsimään oikea objekti taulukosta
  const id = props.id;

  const deleteButtonHandler = () => {
    props.onDeleteDebt(id);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td className="delete-debt">
        <button onClick={deleteButtonHandler} className="btn">
          Poista
        </button>
      </td>
    </tr>
  );
}

export default Debt;
