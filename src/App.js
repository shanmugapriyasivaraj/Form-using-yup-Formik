import "./App.css";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        {/* <div className="col-md-7"></div> */}
      </div>
    </div>
  );
}
export default App;
