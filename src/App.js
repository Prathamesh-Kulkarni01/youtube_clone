import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col min-h-full" >
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route
              path="/searchResult/:swarchQuery"
              element={<SearchResult />}
            ></Route>
            <Route path="/video/:id" element={<VideoDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
