import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/AppRoute.routes";
import GlobalStyle from './styles/global';

export function App() {

  return (
    <HelmetProvider>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </HelmetProvider>
  )
}