import React from 'react';
import style from './Principalbuttons.module.css'
import {Link} from 'react-router-dom'
 
const Principalbuttons = () => {
    return(
        <>
            <div className={style.container}>
                <div className={style.containerLink}>
                    <Link to="/" className={style.a}>Instrucciones</Link>
                </div>
                <div className={style.containerLink}>
                    <Link to="/playing" className={style.a}>Nuevo Juego</Link>
                </div>
            </div>
        </>
    );
}

export default Principalbuttons;