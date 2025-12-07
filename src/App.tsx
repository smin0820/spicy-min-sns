import "./App.css";
import SessionProvider from "./provider/sessionProvider";
import RootRouter from "./rootRouter";

function App() {
  return (
    <SessionProvider>
      <RootRouter />
    </SessionProvider>
  );
}

export default App;
