import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verbs from "./pages/verbs/verbs";
import NoPage from "./pages/noPage";
import Home from "./pages/home";
import Layout from "./pages/layout";
import GuessMeaning from "./pages/games/guessMeaning";
import GuessPresentConjugation from "./pages/games/guessPresentConjugation";
import GuessType from "./pages/games/guessType";
import GuessVerb from "./pages/games/guessVerb";

function App() {
  return (
    <BrowserRouter basename="/nihongo">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="/verbs" element={<Verbs />} />
          <Route path="/games/guess-meaning" element={<GuessMeaning />} />
          <Route path="/games/guess-verb" element={<GuessVerb />} />
          <Route path="/games/present-conjugation" element={<GuessPresentConjugation />} />
          <Route path="/games/guess-type" element={<GuessType />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="*" element={<Layout />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
