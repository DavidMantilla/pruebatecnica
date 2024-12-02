export  const TableUsuarios=(props)=>{
 console.log(props);
 
    return (
 <div className="tablaUsuarios">
 
  <table >
    <thead>
        <tr>
            <th style={{width:"5%"}}>#</th>
            <th style={{width:"20%"}}>Nombre</th>
            <th style={{width:"20%"}}>Documento</th>
            <th style={{width:"20%"}}>Correo</th>
            <th style={{width:"20%"}}>Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> <br /> <button className="form-button">Editar</button> <button className="form-button">Eliminar</button></td>
        </tr>
    </tbody>
  </table>
    
 </div>

    )

}