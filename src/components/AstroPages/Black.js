import React from 'react'
import blackHole from '../Images/black_hole.jpeg'

function Black() {
 
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
              <h1 className='text-3xl font-bold'>Mystery of Black Holes</h1>
              <p className='my-4'>June 6,2022</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-96 shadow-2xl border-solid border-2 border-gray-300 rounded-xl" src={blackHole} alt="Black Hole Image"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Spacetime Bending</h3><br/>
               <p>Black holes are one of the most fascinating and mysterious objects in the universe. They are regions of space that have such intense gravitational fields that nothing, not even light, can escape them. They are formed when massive stars collapse in on themselves, creating a singularity that is surrounded by an event horizon.</p>
               <br/>
               <p>One of the most interesting aspects of black holes is their extreme gravitational pull. This pull is so strong that it warps the fabric of spacetime itself, creating a region from which nothing can escape. This means that anything that gets too close to a black hole is inevitably sucked in, including stars, planets, and even entire galaxies.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Role in The Evolution of Universe</h3><br/>
               <p>Another fascinating aspect of black holes is their potential role in the evolution of the universe. It is believed that black holes may have played a key role in the formation of galaxies and other large-scale structures in the early universe. This is because their intense gravitational fields could have helped to pull in vast amounts of matter, creating the building blocks for the structures that we see today.</p>
               <br/>
               <p>In addition, black holes are also important for our understanding of the laws of physics. They are unique environments that allow us to study the behavior of matter and energy under extreme conditions that are not found anywhere else in the universe. For example, studying the behavior of matter near a black hole can help us to better understand the fundamental properties of matter and energy.</p>
            </div>
        </div>
    </div>
  )
}

export default Black