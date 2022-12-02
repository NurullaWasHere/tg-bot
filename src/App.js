import React from "react";

const tg = window.Telegram.WebApp;

function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return  (
    <div className="app">
      <button onClick={ onClose }>asdads</button>
    </div>
  )
}

export default App;
