import React, { useEffect, useState } from 'react';
import './App.css';
import Circles from './Circles';



const colors = [
  { id: 1,colore: "#FFA500",valore:"orange", selezionato: true },
  { id: 2,colore: "#0000ff",valore: "blue", selezionato: false },
  { id: 3,colore: "#ff4443",valore: "red", selezionato: false },
  { id: 4,colore: "#33ee12",valore: "green", selezionato: false},
  { id: 5,colore: "#eeee00",valore: "yellow", selezionato: false},
  { id: 6,colore: "#ff00ff",valore: "violet", selezionato: false},
  { id: 7,colore: "#666666",valore: "grey", selezionato: false},
]

function App() {
  

  useEffect(() =>{
    whichColor()
  },[])

  const [colori, cambiaColore] = useState(colors)
  const [coloreScelto, setColoreScelto] = useState('')
  
  const whichColor = () =>{
    colori.map(colore => {
      if (colore.selezionato === true){
        setColoreScelto(colore.valore)
      }
    })
  }


  const setSelected = id => {
    cambiaColore(
      colori.map(colore =>{
        if (colore.id === id){
          colore.selezionato = true
        }else{
          colore.selezionato = false
        }
        return colore
      })
    )
    whichColor()
  }



  return (

    <>
      <Circles col={colori} cambiaColore={cambiaColore} setSelected={setSelected}/>
      <p>Il colore che hai scelto è: <b>{coloreScelto}</b></p>
    </>

  );
}

export default App;
