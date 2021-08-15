import "./App.css";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
