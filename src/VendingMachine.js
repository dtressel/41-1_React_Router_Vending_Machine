import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <p>Choose a snack:</p>
      <div><Link to="/chips"><button>Chips</button></Link></div>
      <div><Link to="/snickers"><button>Snickers</button></Link></div>
      <div><Link to="/skittles"><button>Skittles</button></Link></div>
    </div>
  );
}

export default VendingMachine;