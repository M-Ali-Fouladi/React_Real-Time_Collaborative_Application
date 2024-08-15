import React from "react";
import Editor from "./components/Editor";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Real-Time Collaborative Editor</h1>
        <Editor />
      </div>
    </Provider>
  );
}

export default App;
