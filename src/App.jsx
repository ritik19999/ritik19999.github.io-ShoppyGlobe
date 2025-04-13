import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    //Proving store access to whole application by wrapping inside Provider
    <Provider store={appStore}>
      <Header></Header>
      <div className="min-h-screen flex flex-col">
        {/* router  */}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
