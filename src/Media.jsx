import style from './Media.module.css'
import{ useState, } from 'react'

export default function Media(){

    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [n3, setN3] = useState()
    const [n4, setN4] = useState()
    const [n5, setN5] = useState()


    const [respSoma, setRespSoma] = useState()
    const [respMed, setRespMed] = useState()


    const calcular = () => {
        const soma = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5);
        setRespSoma(soma);
        setRespMed(soma / 5);   
      }
    return(
        <>
         <h5><a href={"/"} className={style.back}>voltar</a></h5>
        <h1>Media</h1>
        <br />
        <div>
        <input type="number"  value={n1} onChange={(e) => setN1(e.target.value)} placeholder='Primeiro número'/> <br />
        <input type="number"  value={n2} onChange={(e) => setN2(e.target.value)} placeholder='Segundo número'/> <br />
        <input type="number"  value={n3} onChange={(e) => setN3(e.target.value)} placeholder='Terceiro número'/> <br />
        <input type="number"  value={n4} onChange={(e) => setN4(e.target.value)} placeholder='Quarto número'/> <br />
        <input type="number"  value={n5} onChange={(e) => setN5(e.target.value)} placeholder='Quinto número'/> <br />
        </div>
        <div>
            <h4>Media</h4>
            <p>
            <button onClick={calcular}>Calcular</button>
            <br />
            {!isNaN(respMed) ? respMed: "Digite número válidos" }
            <br />
            { respMed <= 7 ? "Reprovou" : "Aprovado"}
            </p>
        </div>
       
        </>
    )
}