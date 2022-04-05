import React, {useState, useEffect} from 'react';
import style from './Playing.module.css'
import {Preguntas} from '../Helpers/BD.jsx'

const Playing = () => {
    const [random, setRandom] = useState(Math.round(Math.random() * 100))
    const [lifes, setLife] = useState(5)
    const [points, setPoints] = useState(0)
    const [time, setTime] = useState(20)
    const [clase, setClase] = useState([style.naturaleza, style.cultura, style.arte, style.deportes, style.viajes])
    const [gameOver, setGameOver] = useState(null)

    useEffect(() => {
        let contador = setInterval(() => {time > 0 ? setTime(time-1) : setGameOver(window.location.href='/gameover')}, 1000)
        return () => clearInterval(contador)
    },[time])

    const correct = () => {
        console.log("correct")
        speechSynthesis.speak(new SpeechSynthesisUtterance('¡Correct!'))
        let rand = Math.round(Math.random() * 100)
        rand = validate_random(rand)
        setRandom(rand)
        setPoints(points + 1)
        setTime(20) 
    }
    const wrong = () => {
        console.log("wrong")
        speechSynthesis.speak(new SpeechSynthesisUtterance('¡Incorrect!'))
        let rand = Math.round(Math.random() * 100)
        rand = validate_random(rand)
        setRandom(rand)
        setLife(lifes > 0 ? lifes - 1 : setGameOver(window.location.href='/gameover'))
        setTime(20) 
    }

    const validate_random = (rand) => 
    {
        Preguntas.forEach(foreach);
        function foreach(question)
        {
            if(question.id === rand)
            {
                if(question.flag === 'true')
                {
                    rand = Math.round(Math.random() * 100)
                    rand = validate_random(rand)
                }
                else
                    return rand;
            }
            else
                return null;
        }
        return rand
    }

    //Return funcion principal
    return(
        <>
            {Preguntas.map(question => (
                question.id === random ?
                <> 
                    {question.flag = true}
                    <div className={style.countContainer}>
                        <h2>Time: {time}</h2>
                        <h2>Points: {points}</h2>
                        <h2>Life: {lifes}</h2>
                    </div>

                    <div className={style.imgContainer}>
                        <div className={question.estilos === "naturaleza" ? clase[0]: 
                                        question.estilos === "cultura" ? clase[1]: 
                                        question.estilos === "arte" ? clase[2]: 
                                        question.estilos === "deportes" ? clase[3]:
                                        question.estilos === "viajes" ? clase[4] : clase[1]} >
                        </div>
                    </div>

                    <div className={style.preguntaContainer}>
                        <h3>{question.pregunta}</h3>
                    </div>

                    <div className={style.buttonContainer}>
                        <button className={style.button} onClick={() => question.respuesta1 === question.solucion ? correct() : wrong()}>{[question.respuesta1]}</button>
                        <button className={style.button} onClick={() => question.respuesta2 === question.solucion ? correct() : wrong()}>{[question.respuesta2]}</button>
                        <button className={style.button} onClick={() => question.respuesta3 === question.solucion ? correct() : wrong()}>{[question.respuesta3]}</button>
                    </div>

                </> : null
            ))}
        </>
    );
}

export default Playing