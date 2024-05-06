
import { useRoutes, BrowserRouter } from "react-router-dom";
import {  UniversityProvider} from "../../contexts";
import { Home } from "../Home";
import { NotFound } from "../NotFound";
import { Navbar } from "../../components/NavBar";


const AppRoutes = () => {
  
  let routes = useRoutes([
    {path: "/",element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);
      
   return routes;
};

function App() {
  return (
    <UniversityProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </UniversityProvider>
  );
}

export default App;
