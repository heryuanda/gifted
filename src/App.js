import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<div>This is home</div>}></Route>
          <Route path="*" element={<div>Not Found</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
