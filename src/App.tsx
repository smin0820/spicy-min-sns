import { useEffect } from "react";
import "./App.css";
import supabase from "./lib/supabase";
import RootRouter from "./rootRouter";
import { useSetSession } from "./store/session";

function App() {
  const setSession = useSetSession();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);
  return <RootRouter />;
}

export default App;
