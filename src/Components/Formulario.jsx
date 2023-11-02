import { useState } from "react";
import Card from "./Card";
import Styles from "../Styles/formulario.module.css";

const Formulario = () => {
    //Estados
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [nombreEnTarjeta, setNombreEnTarjeta] = useState("");
    const [apellidoEnTarjeta, setApellidoEnTarjeta] = useState("");
    const [validador, setValidador] = useState(false);
    const [mostrar, setMostrar] = useState(false);

    //manejadores de los eventos onChange
    const onChangeNombre = (event) => setNombre(event.target.value.trimStart());
    const onChangeApellido = (event) => setApellido(event.target.value);

    //manejador del submit del formulario
    const handlerSubmit = (event) => {
        event.preventDefault();

        //validaciones
        if (nombre.length > 2 && apellido.length > 5) {
            setValidador(true);
            setNombreEnTarjeta(nombre);
            setApellidoEnTarjeta(apellido);
            setMostrar(true);
        } else {
            setValidador(false);
            setMostrar(true);
        }
    };

    return (
        <div>
            <h1>Escribe tus datos</h1>
            <form className={Styles.contenedor} onSubmit={handlerSubmit}>                
                <div className={Styles.inputs}>
                    <label htmlFor="nombreForm">Nombre: </label>
                    <input id="nombreForm" type="text" placeholder="Ingrese el nombre" value={nombre} onChange={onChangeNombre} />
                </div>
                <div className={Styles.inputs}>
                    <label htmlFor="apellidoForm">Apellido: </label>
                    <input id="apellidoForm" type="text" placeholder="Ingrese Apellido" value={apellido} onChange={onChangeApellido} />
                </div>
                <button className={Styles.boton} type="submit">Enviar</button>
            </form>

            {/*Logica para mostrar los mensajes correspondientes al enviar el formulario*/}
            {mostrar &&
                (validador ? (<Card nombre={nombreEnTarjeta} apellido={apellidoEnTarjeta} />) 
                    : (<p className={Styles.error}>Por favor chequea que la información sea correcta</p>)
                )
            }
            
        </div>
    );
};

export default Formulario;
