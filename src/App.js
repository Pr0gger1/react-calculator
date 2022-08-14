import './styles/App.css';

import Calculator from "./components/Calculator";
import NumberProvider from "./components/NumberProvider";

function App() {
  return (
      <NumberProvider>
        <Calculator/>
      </NumberProvider>
  );
}

export default App;
