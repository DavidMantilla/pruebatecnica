export const FormSearch = () => {
  return (
    <div className="searchform">
      <form action="">
        <div style={{width:'20%'}}>
          <label htmlFor="">Desde</label>
          <input type="date" className="form-control" />
        </div>
        <div style={{width:'20%'}}>
          <label htmlFor="">Hasta</label>
          <input type="date" className="form-control" />
        </div>
        <div style={{width:'20%'}}>
          <label htmlFor="">Documento</label>
          <input type="text" className="form-control" />
        </div>
        <div style={{width:'20%'}}>
          <label htmlFor="">Nombre</label>
          <input type="text" className="form-control" />
        </div>
        <div style={{lineHeight:"25px"}}>
            <br />
          <button className="form-button">Buscar</button>
        </div>
      </form>
    </div>
  );
};
