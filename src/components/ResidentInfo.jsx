import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({Url}) => {

    const[rym, setRym] = useState({})
    
    useEffect (()=>{
        axios.get(Url)
        .then(res => setRym(res.data))

    }, [])

    console.log(rym)

    return (
        <section className='personaje'>
			<div className='personaje-header'>
				<div className='estado'>
					<span className={rym.status}></span>
					<h4>{rym.status}</h4>
				</div>
			</div>
			<div className='personaje-body'>
				<figure>
                <img src={rym.image} alt={rym.image} />
				</figure>

				<h2>{rym.name}</h2>
                
				<p>
                ORIGEN
                <br />
                {rym.origin?.name}
				</p>
                <br />
                <p>
                APARICIÓN EN EPISODIOS /
                <span>  {rym.episode?.length}</span>
                </p>
			</div>
		</section>
	)
}
    


export default ResidentInfo;