import { Provider } from "react-redux";
import Dashboard from "./modules/dashboard";
import { store } from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
};

export default App;
