import axios from 'axios'
import { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import image from './assets/image 2.png'
import './App.css'
import ResidentInfo from './components/ResidentInfo'

        

function App() {

  const [location, setLocation] = useState({})
  const [searchLo, setSearchLo]= useState("")

  useEffect(() => {
   const randomLocationId = Math.floor(Math.random() * 126) +1
    axios.get(`https://rickandmortyapi.com/api/location/${randomLocationId}`)
    .then(res =>setLocation(res.data))
    
    }, [])

    console.log(location)

    const searchLocation = ()=>{
      axios.get(`https://rickandmortyapi.com/api/location/${searchLo}`)
      .then(res => setLocation(res.data))

    }
  
  return(

     <div>
        <img className='logo'  src={logo} alt=""  />
        <h1 className='h1'>Rick and Morty Wiki</h1>
          <input className='input' 
            type="text"
            placeholder='Type a location id' 
            value={searchLo}
             onChange = {e => setSearchLo(e.target.value)}
           />
              <button className='button' onClick={searchLocation}>Search</button>
         
         <div className='Location'>
            <h3>{location.name}</h3>  
          

            <div className='Subtitle'>
              <h5><b>Type: </b>{location.type}</h5>
              <h5><b>Dimension: </b>{location.dimension}</h5>
              <h5><b>Population: </b>{location.residents?.length}</h5>
            </div> 

                <div>
                  <h3 className='residents'>Residents</h3>
                  <span className='lista-personajes'>
                    {location.residents?.map( residents =>(
                   
                      <ResidentInfo 
                      Url ={residents}
                      key ={residents}
                      />

                    ))
                    }
                  </span>
               
                </div>
         </div>


    </div>
  
  )
}

export default App

