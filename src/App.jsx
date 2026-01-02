import { BrowserRouter, Route ,Routes } from "react-router-dom";
import NotFound from "./Pages/Notfound";
import Home from "./Pages/Home";
import './notfound.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
