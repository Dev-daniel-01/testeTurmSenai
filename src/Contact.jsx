import style from "./Contact.module.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { Menu } from "./components/menu";


function contact (){
    const position = [51.505, -0.09]
    
    return(
        <>
        <Menu option01="voltar a pagina inicial"/>
        <h1 className={style.FRUTA}>Qualquer</h1>
        <br />
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "70vh"}}>
        
        <TileLayer
        
    //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      
     />
     
     
     <Marker position={position}>
      <Popup>
        
        A pretty CSS3 popup. <br /> Easily customizable.
         </Popup>
     </Marker>
     </MapContainer>
      </>
    )
}

export default contact