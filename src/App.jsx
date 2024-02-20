import { useState } from 'react'

function App() {

  const [hi, setHi] = useState();
  const [mi, setMi] = useState();
  const [hf, setHf] = useState();
  const [mf, setMf] = useState();
  const [resultado, setResultado] = useState("Resultado");

  const soma = () =>{
    let somaHora = Number(hi) + Number(hf);
    let somaMin = Number(mi) + Number(mf);
    while (somaMin > 59){
        somaMin -= 60;
        somaHora ++;
    }
    setResultado(somaHora + ":" + somaMin)
  }

  const sub = () => {
    let momentoInicial = hi*60 + Number(mi) ;
    let momentoFinal = hf*60 + Number(mf);
    let resultadoHora = 0;
    let resultadoMinuto = momentoInicial - momentoFinal;
    if(resultadoMinuto < 0){
        resultadoMinuto *= -1;
    }
    while(resultadoMinuto > 59){
        resultadoMinuto -= 60;
        resultadoHora ++;
    }
    setResultado(resultadoHora+":"+resultadoMinuto)
  }

  return (
    <>
      <h1>CALCULADORA</h1>
    <div class="zeca">
        <h3>Escolhaos horários que deseja calcular!</h3>
        <input type="number" 
        value={hi}
        onChange={(e) => setHi(e.target.value)}
        placeholder="_"
        />&nbsp; :&nbsp;
        <input 
        type="number" 
        value={hf}
        onChange={(e) => setHf(e.target.value)}
        placeholder="_"/><br/><br/>
        <input type="number"
        value={mi}
        onChange={(e) => setMi(e.target.value)}
        placeholder="_"
        />&nbsp; :&nbsp;
        <input 
        type="number"
        value={mf}
        onChange={(e) => setMf(e.target.value)} 
        placeholder="_"
        /><br/><br/>
    </div>
        <br/>
        <button onClick={soma}>SOMA</button> &nbsp;
        <button onClick={sub}>DIFERENÇA</button>
        <h3 id="r">{resultado}</h3>
    </>
  )
}
export default App
