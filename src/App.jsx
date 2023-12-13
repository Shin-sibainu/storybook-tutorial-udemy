import "./index.css";
import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import store from "./lib/store";

//npx chromatic --project-token=chpt_988ba981abeeb08 --storybook-build-dir=storybook-static
//aa

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
