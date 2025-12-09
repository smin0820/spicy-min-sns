import "./App.css";
import ModalProvider from "./provider/modalProvider";
import SessionProvider from "./provider/sessionProvider";
import RootRouter from "./rootRouter";

function App() {
  return (
    <SessionProvider>
      <ModalProvider>
        <RootRouter />
      </ModalProvider>
    </SessionProvider>
  );
}

export default App;
