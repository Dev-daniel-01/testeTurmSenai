import style from "./modalinfo.module.css"

export const ModalInfo = ({data, close}) => (
    <div className={style.modal} style={{position: "fixed", left: "50%", top: "35%", transform: "translate(-50%, -35%)", background:"white", zIndex: "999"}}>
        <button onClick={close}>❌</button>
        <img src={data.image} alt={data.name} />
        <h1>name: {data.name}</h1>
        <p>status: {data.status}</p>
        <p>species: {data.species}</p>
        <p>type: {data.type}</p>
        <p>gender: {data.gender}</p>
        <p>location name: {data.location.name}</p>
        <p><strong>Crated: </strong>{new Date(data.created).toLocaleString("pt-BR", {
            day:"2-digit",
            month:"2-digit",
            year: "numeric",
            hour:"numeric",
            minute:"numeric",
            second:"numeric"
        })}</p>
    </div>
)

