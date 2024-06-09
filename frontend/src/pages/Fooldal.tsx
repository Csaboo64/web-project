import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
//import './App.css'
import { Sorsjegy, Sorsjegyek } from '../sorsjegyek'
import { Container, Row } from 'react-bootstrap';
import './style.css'
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
 
  const kivalogatott = sorsjegy.filter( sorsjegy => sorsjegy.nev.toLowerCase().includes(searchTerm) );

  return <main>
    {/*<h3>Új sorsjegy felvétele: </h3>
    <input type="text" placeholder="Add meg az új sorsjegy nevét" size={24} onChange={
      e => {
        setujsorsjegy( e.currentTarget.value )
        console.log( e.currentTarget.value )
      }
    } />
    <button onClick={ ()=>{
      setSorsjegyek([...sorsjegy, {nev: ujsorsjegy, ar: 1000, fonyeremeny_millio:10,nyeresi_esely:3.5,kaphato:true,keplink:"asd", id:sorsjegy.length+1 }])
    } } >Felvétel</button>
 
    <h3>Keresés:</h3>
    <input type="text" placeholder="Add meg a keresendő eseményt" size={27}
      onInput={ e => {
        setSearchTerm(e.currentTarget.value),
        console.log(e.currentTarget.value)
        }
      }
    ></input>*/}
    {/*<Table responsive="sm">
    <thead>
          <tr>
            <th>id</th>
            <th>név</th>
            <th>ár</th>
            <th>Főnyeremény(millió)</th>
            <th>Nyerési esély</th>
            <th>Kapható-e</th>
          </tr>
        </thead>
      {
        kivalogatott.map(sorsjegy =>  <tbody><tr><td>{sorsjegy.id}</td><td>{sorsjegy.nev}</td> <td>{sorsjegy.ar} </td> <td>{sorsjegy.fonyeremeny_millio}</td><td>{sorsjegy.nyeresi_esely}</td> <td>{bool(sorsjegy.kaphato)}</td></tr></tbody>)
      }
    </Table>*/}
    {/*<Container>
      <Row>
      {
          kivalogatott.map(sorsjegy =>
            <Card style={{ width: '18rem' }} className='card'>
            <Card.Body>
              <Card.Title>{sorsjegy.nev}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Kapható-e: {bool(sorsjegy.kaphato)}</Card.Subtitle>
              <Card.Text>
                Ára:{sorsjegy.ar}
                <br />
                Főnyeremény(millió): {sorsjegy.fonyeremeny_millio}m
                <br />
                Nyerési esély: {sorsjegy.nyeresi_esely}
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>)
      }
      </Row>
    </Container>*/}
    {
      kivalogatott.map(sorsjegyek => 
      <figure className='snip1567'>
        <img src={`kepek/${sorsjegyek.keplink}`} height="200" alt="sample88" />
        <figcaption>
          <h3>{sorsjegyek.nev}</h3>
          <p>Ára: {sorsjegyek.ar} Ft<br/>Főnyeremény(millió): {sorsjegyek.fonyeremeny_millio}<br/>Nyerési esély: {sorsjegyek.nyeresi_esely}<br/>Kapható-e: {bool(sorsjegyek.kaphato)}</p>
        </figcaption>
        <div className="hover"></div><i className="ion-android-add"></i>
  <a href="#"></a>
    </figure>)
    }
  </main>
}
function bool(szam:boolean){
    if(szam == false){
      return "Nem";
    }
    else{
      return "Igen";
    }
}
export default Fooldal