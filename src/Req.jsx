import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { apiRick } from './api/api'
import { Card } from './Card'


export default function Req(){

    const[data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")

    const[erro, setErro] = useState(false)

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
        
        <section className={style.wrapPage}>
            <h1>Rick and morty Api</h1>
            <input type="text" placeholder='Digite o nome de algum personagem' value={searchName} onChange={(e) => setSearchName(e.target.value)} /> 
            {erro && <p>Pagina não encontrada</p>}
            <input type="text" placeholder='Digite uma pagina de 1 a 42' value={page} onChange={(e) => setPage(e.target.value)} /> 
            {erro && <p>Pagina não encontrada</p>}

            <div className={style.wrapCards}>
            {data.map((item, index) => {
                return(
                    
                    <div key={index}>
                        <Card name={item.name} image={item.image} />
                    </div>
                )
            })}
            </div>
            
        </section>

    )
}