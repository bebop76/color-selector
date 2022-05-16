import React, { useEffect, useState } from "react";
// import TestContainer from "./TestContainer";

const obj2 = [
    {
    sequenza: {a:0, b:1, c:2, d:3},
    dispari: {a:1, b:3, c:5, d:7},
    pari: {a:0, b:2, c:4, d:6},
    }
]
const soloObj = {a:8, b:7, c:6}

function Test(){

const obj = [
    
    {a:0, b:1, c:2, d:3},
    {a:1, b:3, c:5, d:7},
    {a:0, b:2, c:4, d:6},
    
]


const [ogg, setOgg] = useState(obj)

// ***** DA FARE !!!!********
// usare obj2


function a(){
    //adding 9
    const newObj = {
        a: 9,
        b:9,
        c:9,
        d:9
    }
    setOgg([...ogg, newObj])


}
function r(){
    //remove dispari
    setOgg([
        ...ogg.filter(objToDelete => {
            return objToDelete.a !== 1 && objToDelete.d !== 7
        })
    ])

    
}
function m(){
    //modify
        setOgg( ogg.map((el) => el.a === 0 && el.b === 1
          ? { ...el, a:10,b:100,c:1000,d:0 }
          : el,
         ));

}

    function me(){
        setOgg(ogg.map((ele) => ele.c === 9 ? {...ele, c:1976} : ele))
    }


    return (
        <React.Fragment>
        <TestComponent oggetto={ogg} />
        <button onClick={a}>add</button>
        <button onClick={r}>remove odd</button>
        <button onClick={m}>modify</button>
        <button onClick={me}>modify 3rd elem</button>
        </React.Fragment>
      );
    

        }

const TestComponent = ( { oggetto }) => {
    //***** aggiungere su obj2 */
    const pari = oggetto
    return(
        <div>

        {oggetto.map((o, i) => (
            <p key={i}>
                {o.a}--{o.b}--{o.c}--{o.d} 
            </p>
        ))}
 
        </div>
    )
}

export default Test;