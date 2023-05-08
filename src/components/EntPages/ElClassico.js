import React from 'react'
import classic from '../Images/el_classico.jpg'

function ElClassico() {
 
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
              <h1 className='text-3xl font-bold'>The El-Classico</h1>
              <p className='my-4'>August 16,2016</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-80 h-96 shadow-2xl border-solid border-2 border-gray-300 rounded-xl" src={classic} alt="Poster of El-Classico"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>The Spanish Classic</h3><br/>
               <p>El Clásico is the name given to the rivalry between two of the most successful football clubs in the world: Real Madrid and Barcelona. These two teams have been competing against each other since 1902, and their matches are always among the most anticipated events in the football calendar.</p>
               <br/>
               <p>One of the reasons why El Clásico is so important is that it represents more than just a football match. It is a clash between two of Spain's biggest cities, each with its own distinct culture and identity. The rivalry is fueled by a long and complicated history that goes beyond football.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Rivalry of The Best</h3><br/>
               <p>The matches themselves are always intense and closely contested affairs. The players on both teams are among the best in the world, and the matches are full of skill, speed, and tactical battles. The atmosphere in the stadium is electric, with passionate fans cheering their teams on and creating a spectacle that is unrivaled in world football.</p>
               <br/>
               <p>Over the years, El Clásico has produced some of the most memorable moments in football history. From Lionel Messi's stunning solo goals to Cristiano Ronaldo's spectacular long range goals, the matches are always full of drama and excitement.</p>
               <br/>
               <p>But the rivalry has also had its darker moments. There have been instances of violence and racism, as well as controversies over refereeing decisions and allegations of cheating. The intensity of the rivalry can sometimes spill over into negative behavior, which is a reminder of the need for respect and sportsmanship in football.</p>
            </div>
        </div>
    </div>
  )
}

export default ElClassico