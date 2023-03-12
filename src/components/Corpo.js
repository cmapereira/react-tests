import React,{useState} from 'react';
import Dados from './Dados.js'

export default function Corpo(){

    //associa o retorno da função canal ao props.cnl
    const canal =() => {
        return 'React.JS'
    } 

    //associa os valores de youtube e curso ao props.ytb e props.crs
    const youtube = 'youtube.com';
    const curso = 'Awari';

    //associa o valor de somar ao props.smr
    const somar = (v1, v2)=>{
        return v1 + v2
    }

    //acrescenta 1 no click do button
    let [num,setnum]=useState(0)

    //troca nome baseado no click do button
    let [nome,setnome]=useState('Claudio')
    const trocaNome = ()=> {
        let nomeTrocado='';
        if(nome ==='Claudio'){
            nomeTrocado ='Pereira'
            return nomeTrocado
        }else if(nome ==='Pereira'){
            nomeTrocado ='Claudio'
            return nomeTrocado
        }   
    }

    return(
        <section className="flex">
            <h2 style={{color:'#ff0f50'}}>Informações Adicionais</h2>
            <br></br>
            <Dados 
                cnl = {canal}
                ytb ={youtube}
                crs ={curso}
                smr ={somar}
            />
            <p>Valor do state num: {num}</p>
            <button onClick={()=>setnum(num+1)}>Soma 1</button>
            <p>Trocar Nome: <b>{nome}</b></p>
            <button onClick={()=>setnome(trocaNome)}>Muda Nome</button>
        </section>
    )
}