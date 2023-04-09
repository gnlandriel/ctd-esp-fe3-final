import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const { dentists } = useContext(ContextGlobal)
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentists
          ? dentists.map(dentist => (<Card key={dentist.id} username={dentist.username} name={dentist.name} id={dentist.id}/>))
          : null}
      </div>
    </main>
  )
}

export default Home