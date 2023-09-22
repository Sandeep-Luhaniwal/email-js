import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Buttonmiss from './compoments/Buttonmiss';
// import Submittwo from './compoments/Submittwo';

const data = createContext();
const data1 = createContext();

function App() {
  // const name = "sandeep"
  // const age = "23"
  return (
    <>
      <Buttonmiss />
      {/* <Submittwo /> */}
    </>
  );
}

export default App;
export { data, data1 }