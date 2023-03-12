import React,{useState} from 'react';
import './Relogio.css';

export default function Relogio(){

    //cria um relógio na tela
    let [hora,sethora]=useState(new Date().toLocaleTimeString())
    
    const trocaHora = ()=>{
        hora = new Date().toLocaleTimeString()
        return hora;
    }

    setInterval(()=>sethora(trocaHora), 1000)


    return(
        <p className='relogio'>
            {hora}
        </p>
    )
}
