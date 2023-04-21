import { useState, useEffect } from 'react';

export default function App() {
  const componentesBomba = [
    "Proyectil",
    "Detonador",
    "Iniciador de neutrones"    
  ];

  const [data, setData] = useState(componentesBomba);
  const [count, setCount] = useState(0);
  const [solution, setSolution] = useState('');
  const [textValue, setTextValue] = useState('');
  const [selectValue, setselectValue] = useState('');

  useEffect(() => {
      let new_data = JSON.parse(JSON.stringify(data));
      new_data.push("Batería");
      new_data = new_data.reverse();
      setData(new_data);
  } , []);

  const _onChangeInput = (text) => {
    let c = count + 1;
    setTextValue(text);
    setCount(c);
  };

  const _onChangeSelect = (e) => {
    setselectValue(+e.target.value);
  };

  const _onSubmit = (e) => {
    e.preventDefault();
    let orden = data[0] + ", " + data[count - 5] + ", " + data[textValue.length - 7] + ", " + data[selectValue];
    setSolution(orden);
  };

  return (
    <div>
      <form onSubmit={_onSubmit}>
        <p>El orden de desactivación aparecerá a al final, cuando escribas el texto "Resolver" en el campo de texto, selecciones el color "verde" y pulses el botón "Obtener orden correcto"</p>
        <input type="text" value={textValue} onChange={(e) => _onChangeInput(e.target.value)} required />   
        <br />
        <select value={selectValue} onChange={_onChangeSelect}>
            <option value="1">Azul</option>
            <option value="2">Verde</option>
            <option value="3">Rojo</option>
            <option value="4">Negro</option>
        </select>
        <br/>
        <input type="submit" value="Obtener orden correcto" />
      </form>
      <div>El orden correcto es: {solution}</div>
    </div>
  );
}
