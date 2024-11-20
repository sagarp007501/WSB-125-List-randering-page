import React, { useState } from 'react'
import { data } from './data.js'

export default function Home() {

    const [product,setProduct] = useState([data]);

  return (
    <>
    <div className='heading'>Home Page</div>
    <div className='main'>
        <div className='row'>

            {
                data.map((value,index) => {
                    return(
                    <div className='column' key={index}>
                         <div className='image'>
                                <img src={ value.image }/>
                                <h2>{ value.title }</h2>
                                <p>{ value.descripition }</p>
                        </div>
                    </div>
                    )
                    
                    
                    
                })
            }
        </div>
    </div>
    </>
  )
}

function product(){
    return(
        <div className='column'>
              <div className='image'>
                    <img src='https://assets.codepen.io/652/marcella-marcella-hn6CC9aosEk-unsplash.jpg'/>
                    <h2>title</h2>
                    <p>descripition</p>
               </div>
         </div>
    )
}
