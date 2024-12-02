
import { TableUsuarios } from "../components/tableusuarios"



export  const AdminPage=()=>{

    return (
        <div className="container" style={{flexDirection:"column",gap:"10px",}}>
      
       <div className="card-search" style={{overflowY:"auto",height:'500px'}}>
       <TableUsuarios></TableUsuarios>

       </div>
        </div>
    )
}