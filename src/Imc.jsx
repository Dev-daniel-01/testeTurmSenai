import style from "./Imc.module.css";
import { useState } from "react";

export default function Imc() {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();

  const [respImc, setRespImc] = useState();

  const calcularIMC = () => {
    const peso = parseFloat(n1);
    const altura = parseFloat(n2);

    const resIMC = peso / (altura * altura);
    setRespImc(resIMC);
  };

  const interpretarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    else if (imc < 24.9) return "Peso normal";
    else if (imc < 29.9) return "Sobrepeso";
    else if (imc < 34.9) return "Obesidade grau I";
    else if (imc < 39.9) return "Obesidade grau II";
    else return "Obesidade grau III";
  };

  return (
    <>
        <a href={"/"} className={style.backBtn}>voltar</a>
      <h1>Calcular Imc</h1>
      <br />
      <div>
        <h4>Digite os números os cálculos</h4>
        <input type="number"  value={n1} onChange={(e) => setN1(e.target.value)} placeholder="Peso"/>
        <br />
        <input type="number"  value={n2}  onChange={(e) => setN2(e.target.value)} placeholder="Altura"/>
      </div>
      <div>
        <p>
          <button onClick={calcularIMC}>Calcular</button>
          {isNaN(respImc) ? ("Digite valores válidos") : 
          (<> <br /> IMC: {respImc.toFixed(2)} <br /> {interpretarIMC(respImc)} </> )}

        </p>
      </div>
    </>
  );
}
