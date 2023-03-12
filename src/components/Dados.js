import React from 'react';
import './Dados.css';


export default function Dados(props){
    let n1 = 10;
    let n2 = 5;

    const destaque={
        color: '#ff0f50',
        fontSize: '1.5em'
    }

    return(
        <section className="flex">
            <p><b>Canal:</b> {props.cnl()}</p>
            <p><b>Youtube:</b> {props.ytb}</p>
            <p style={destaque}>Curso: {props.crs}</p>
            <p className='texto'>{`A soma de ${n1} e ${n2} é: ${props.smr(n1, n2)}`}</p>
        </section>
    )
};