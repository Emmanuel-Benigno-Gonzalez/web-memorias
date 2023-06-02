import React from 'react'
import imagen from '../img/prueba.jpg';
import '../styles/styles.css'

const Memorias = (props) => {
    return (
        <div className="Contenedor">
          <div className="grid">
            <div className="menu">
              <div className="usuario">
                <img className="memoria__imagen" src={imagen} alt="imagen memoria" />
                <h3>
                    {props.name}
                </h3>
                <p>correo@correo.com</p>
                <form className="formulario">
                  <div className="alinear-derecha flex">
                    <input className="boton w-sm-100" type="submit" value="Seleccionar Fecha" />
                  </div>
                  <div className="alinear-derecha flex">
                    <input className="boton w-sm-100" type="submit" value="Crear Memoria" />
                  </div>
                </form>
              </div>
            </div>
            
            <div className="contenido">
              <div className="memoria">
                <img className="memoria__imagen" src={imagen} alt="imagen memoria" />
                <div className="memoria__informacion">
                            <p className="memoria__titulo" >Titulo</p>
                            <p className="memoria__fecha" >dd/mes/yyyy</p>
                </div>
              </div>
              <div className="memoria">
                <img className="memoria__imagen" src={imagen} alt="imagen memoria" />
                <div className="memoria__informacion">
                            <p className="memoria__titulo" >Titulo</p>
                            <p className="memoria__fecha" >dd/mes/yyyy</p>
                </div>
              </div>
              <div className="memoria">
                <img className="memoria__imagen" src={imagen} alt="imagen memoria" />
                <div className="memoria__informacion">
                            <p className="memoria__titulo" >Titulo</p>
                            <p className="memoria__fecha" >dd/mes/yyyy</p>
                </div>
              </div>
              <div className="memoria">
                <img className="memoria__imagen" src={imagen} alt="imagen memoria" />
                <div className="memoria__informacion">
                            <p className="memoria__titulo" >Titulo</p>
                            <p className="memoria__fecha" >dd/mes/yyyy</p>
                </div>
              </div>
              <div className="memoria">
                <img className="memoria__imagen" src={imagen} alt="imagen memoria" />
                <div className="memoria__informacion">
                            <p className="memoria__titulo" >Titulo</p>
                            <p className="memoria__fecha" >dd/mes/yyyy</p>
                </div>
              </div>
              <div className="memoria">
                <img className="memoria__imagen" src={imagen} alt="imagen memoria" />
                <div className="memoria__informacion">
                            <p className="memoria__titulo" >Titulo</p>
                            <p className="memoria__fecha" >dd/mes/yyyy</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      );
}

export default Memorias
