import { FormSearch } from "../components/formSearch"
import { TableVisitas } from "../components/tablevisitas"



export  const VisitasPage=()=>{

    return (
        <div className="container" style={{flexDirection:"column",gap:"10px",}}>
       <div className="card-search ">
       <FormSearch></FormSearch>
      
       </div>
       <div className="card-search">
       <TableVisitas></TableVisitas>
       </div>
        </div>
    )
}