import React from 'react'
import halley from '../Images/halley_comet.jpg'

function Halley() {
 
  const navigateBack=()=>{
    window.location.href="/home"
  }
  return (
    <div>
        <div className='sticky top-0 z-50 bg-gray-900 pt-4 pb-4'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateBack}>Back</button>
            </div>
        </div>
        <div className='my-12 mx-14'>
            <div>
              <h1 className='text-3xl font-bold'>The Halley's Comet</h1>
              <p className='my-4'>March 16,2018</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-96 shadow-2xl border-solid border-2 border-gray-300 rounded-xl" src={halley} alt="Image of the Halley's Comet"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Periodic Nature</h3><br/>
               <p>Halley's Comet is one of the most famous comets in history. It is a periodic comet that orbits the Sun every 76 years, and it has been observed and recorded by humans for over 2,000 years.</p>
               <br/>
               <p>Named after the English astronomer Edmund Halley, who first recognized its periodic nature, Halley's Comet is visible from Earth with the naked eye and is known for its distinctive tail of gas and dust. It is a relatively small comet, measuring only about 15 kilometers in diameter, but its impact on human history and culture has been significant.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Ancient and Modern Beliefs</h3><br/>
               <p>Throughout history, Halley's Comet has been viewed as both a harbinger of doom and a symbol of hope and renewal. In ancient times, it was associated with myths and legends of death and destruction, and its appearance was often seen as a sign of impending disaster.</p>
               <br/>
               <p>However, in modern times, Halley's Comet has taken on a more positive connotation. Its periodic appearance has been celebrated as a symbol of continuity and renewal, and it has been the subject of countless works of art, literature, and music.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Role in Scientific Research</h3><br/>
               <p>Halley's Comet has also played an important role in scientific research. It has been visited by spacecraft from various countries, including the European Space Agency's Giotto probe and NASA's International Cometary Explorer, which have provided valuable data and insights into the composition and behavior of comets.</p>
            </div>
        </div>
    </div>
  )
}

export default Halley