import React from "react";
import { createRoot } from "react-dom/client";

import Login from "~/pages/Login";
import Boot from "~/pages/Boot";

import "@unocss/reset/tailwind.css";
import "uno.css";
import "~/styles/index.css";

const Desktop = React.lazy(() => import("~/pages/Desktop"));

export default function App() {
  const [login, setLogin] = useState<boolean>(false);
  const [booting, setBooting] = useState<boolean>(false);
  const [restart, setRestart] = useState<boolean>(false);
  const [sleep, setSleep] = useState<boolean>(false);

  const shutMac = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setRestart(false);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const restartMac = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setRestart(true);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const sleepMac = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setRestart(false);
    setSleep(true);
    setLogin(false);
    setBooting(true);
  };

  if (booting) {
    return <Boot restart={restart} sleep={sleep} setBooting={setBooting} />;
  } else if (login) {
    return (
      <React.Suspense fallback={null}>
        <Desktop
          setLogin={setLogin}
          shutMac={shutMac}
          sleepMac={sleepMac}
          restartMac={restartMac}
        />
      </React.Suspense>
    );
  } else {
    return (
      <Login
        setLogin={setLogin}
        shutMac={shutMac}
        sleepMac={sleepMac}
        restartMac={restartMac}
      />
    );
  }
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

/*
  Waiting one frame lets the HTML in the first response paint before the application
  replaces it. A tab opened in the background has no frames, so it mounts at once.
*/
const mount = () =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

if (document.hidden) mount();
else requestAnimationFrame(() => setTimeout(mount));
