import React from 'react';
import style from './Principalpage.module.css'
import {Link} from 'react-router-dom'

const Principalpage = () => {
    return (
        <>
            <div className={style.container}> 
                {/* <h1 className={style.title}>PLAYCULTURE</h1> */}
                {/* <img src={image} width="50%" alt="imagen" className={style.imagen} /> */}
                <div className={style.titulo}></div>
                <div className={style.imagen}></div>
            </div>

            <div className={style.container}>
                <div className={style.containerLink}>
                    <Link to="/instructions" className={style.a}>Instrucciones</Link>
                </div>
                <div className={style.containerLink}>
                    <Link to="/playing" className={style.a}>Nuevo Juego</Link>
                </div>
            </div>
        </>
    );
}

export default Principalpage;