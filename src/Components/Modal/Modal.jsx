import React from 'react';
import style from './Modal.module.css'
import {Link} from 'react-router-dom'

const Modal = () => {
    return(
        <>
            <div className= {style.modal}> 
                <h2 className= {style.ins}>El objetivo del juego es obtener el mayor numero de puntos, <br />
                    y contestar correctamente las preguntas, <br />
                    para demostrar tus conocimientos. <br />
                    Con cada respuesta correcta el jugador obtendra un punto, <br />
                    en caso contrario se perdera una vida, cuando el contador <br />
                    de vidas llegue a cero, el juego termina, tambien se cuenta con <br />
                    un contador de tiempo que empieza en 20 segundos, si el contador <br />
                    de tiempo llega a cero, el juego tambien termina. <br />
                </h2>
            </div>
            
            <div className={style.container}>
                <Link to="/" className={style.a}>⇦ Volver</Link>
            </div>
        </>
    );
}

export default Modal;