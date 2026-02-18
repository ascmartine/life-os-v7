import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [data, setData] = useState({message: 'Conectando...'});

  useEffect(() => {
    fetch('http://100.81.76.80:8000')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(e => setData({message: 'Error de Conexion'}));
  }, []);

  return (
    <div style={{textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif'}}>
      <h1>Life OS V7</h1>
      <h2>estado del Sistema: <span style={{color: 'green'}}>{data.message}</span></h2>
      <p>Moddo: {data.mode}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
