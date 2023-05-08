import React from 'react'
import percy from '../Images/percy_jackson.jpg'

function PJ() {
 
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
              <h1 className='text-3xl font-bold'>Percy Jackson</h1>
              <p className='my-4'>September 23,2021</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-96 shadow-2xl border-solid border-2 border-gray-300 rounded-xl " src={percy} alt="Percy Jackson Books"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Demigod's Adventures</h3><br/>
               <p>The Percy Jackson books are a series of young adult fantasy novels written by Rick Riordan. The series follows the adventures of Percy Jackson, a demigod who is the son of Poseidon, the god of the sea. Along with his friends Annabeth Chase and Grover Underwood, Percy navigates a world filled with gods, monsters, and other fantastical elements.</p>
               <br/>
               <p>The first book in the series, "The Lightning Thief", was published in 2005 and was an instant hit. It quickly spawned four sequels, as well as several spin-off series and adaptations in other media.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Strengths</h3><br/>
               <p>One of the strengths of the Percy Jackson books is their blending of mythology and modern-day life. The books take place in a world where the gods of ancient Greek mythology are still alive and active in the world. This creates a rich and engaging setting that is both familiar and exotic.</p>
               <br/>
               <p>Another strength of the books is their humor and wit. Riordan has a gift for creating quirky and endearing characters, and the books are filled with clever wordplay and pop culture references that make them accessible and enjoyable for readers of all ages.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Characterization</h3><br/>
               <p>But perhaps the most important aspect of the Percy Jackson books is their emphasis on themes of friendship, loyalty, and identity. Percy and his friends are all outcasts in their own way, and the books explore the challenges and rewards of finding one's place in the world. The characters are relatable and likable, and their struggles and triumphs resonate with readers on a personal level.</p>
            </div>
        </div>
    </div>
  )
}

export default PJ