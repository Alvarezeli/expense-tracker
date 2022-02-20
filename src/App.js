import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home/Home.js";
import Header from "./components/Header/Header.js";
import AddExpense from "./pages/Add-expense/AddExpense.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <div>Footer</div>
    </BrowserRouter>
  );
}

export default App;
