import "./App.css";
import MovieContextProvider from "./context/MovieContextProvider";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <AppRouter />
      </MovieContextProvider>
    </BrowserRouter>
  );
}

export default App;
