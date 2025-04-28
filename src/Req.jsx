import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { apiRick } from './api/api'
import { Card } from './Card'
import { ModalInfo } from './components/modalinfo'
import Tilt from 'react-parallax-tilt'


export default function Req(){

    const[data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")
    const[erro, setErro] = useState(false)
    const [modal, setModal] = useState()

    useEffect(() => {
      apiRick.get(`/character?page=${page}&name=${searchName}`).then((Response) => {
        setData(Response.data.results)
      }).catch((error) => {
       if(error.response.status == 404){
        setErro(true)
       }
        console.log(error)
        
      })
    }, [page, searchName])
    
    console.log(data)


    return(
        <>
        {modal !== undefined && <ModalInfo data={data[modal]} close = {() => setModal()}/>}
         <section className={style.wrapPage}>
            <h1>Rick and morty Api</h1>
            <input type="text" placeholder='Digite o nome de algum personagem' value={searchName} onChange={(e) => setSearchName(e.target.value)} /> 
            {erro && <p>Pagina não encontrada</p>}
            <input type="text" placeholder='Digite uma pagina de 1 a 42' value={page} onChange={(e) => setPage(e.target.value)} /> 
            {erro && <p>Pagina não encontrada</p>}

            <div className={style.wrapCards}>
            {data.map((item, index) => {
                return(
                    
                    <div key={index} style={{display: "flex", flexDirection: "column", gap: "20px", padding: "1rem",border: "2px solid white"}}>
                        <Tilt>
                        <Card name={item.name} image={item.image} />
                        </Tilt>
                        
                        <button onClick={() => setModal(index)}>Info: {item.name}</button>
                    </div>
                )
            })}
            </div>
            
        </section>
        </>
    )
}