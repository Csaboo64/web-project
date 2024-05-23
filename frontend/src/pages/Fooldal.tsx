import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
//import './App.css'
import { Sorsjegy, Sorsjegyek } from '../sorsjegyek'

function Fooldal() {

  const [ sorsjegy, setSorsjegyek ] = useState([] as Sorsjegy[])
  const [ ujsorsjegy, setujsorsjegy ] = useState('')
  const [ searchTerm, setSearchTerm ] = useState('')

  useEffect(() => {
    console.log('sorsjegy fetch effect')
    async function load() {
            let eredmeny = await fetch('http://localhost:3000/sorsjegyek');
            let sorsjegyek = await eredmeny.json() as Sorsjegy[]; 
            console.log(sorsjegyek);
      setSorsjegyek(sorsjegyek);
    }
    load()
  }, [])
  useEffect( ()=>{
    console.log("Változás történt a mi tömbben..." + sorsjegy.length);
    document.title = `Esemény: ${sorsjegy.length}`;
  }, [sorsjegy] )
 
  const kivalogatott = sorsjegy.filter( sorsjegy => sorsjegy.nev.includes(searchTerm) );

  return <main>
    {/*<input type="text" placeholder="Add meg az új mi nevét" onChange={
      e => {
        setujsorsjegy( e.currentTarget.value )
        console.log( e.currentTarget.value )
      }
    } />
    <h3>Új esemény felvétele: </h3>
    <button onClick={ ()=>{
      setSorsjegyek([...sorsjegy, {nev: ujsorsjegy, ar: 1000, online:true,készült:"2020",rating:3.9, id:sorsjegy.length+1 }])
    } } >Felvétel</button>*/}
 
    <h3>Keresés:</h3>
    <input type="text" placeholder="Add meg a keresendő eseményt"
      onInput={ e => {
        setSearchTerm(e.currentTarget.value),
        console.log(e.currentTarget.value)
        }
      }
    ></input>
    <h2>Mesterséges Intelligenciák</h2>
    <Table responsive="sm">
    <thead>
          <tr>
            <th>id</th>
            <th>név</th>
            <th>ár</th>
            <th>Főnyeremény(millió)</th>
            <th>Nyerési esély</th>
            <th>Kapható</th>
          </tr>
        </thead>
      {
        kivalogatott.map(sorsjegy =>  <tbody><tr><td>{sorsjegy.id}</td><td>{sorsjegy.nev}</td> <td>{sorsjegy.ar} </td> <td>{sorsjegy.fonyeremeny_millio}</td><td>{sorsjegy.nyeresi_esely}</td> <td>{sorsjegy.kaphato} </td></tr></tbody>)
      }
    </Table>
 
  </main>
}

export default Fooldal