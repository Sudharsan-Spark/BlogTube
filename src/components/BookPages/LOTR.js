import React from 'react'
import lotr from '../Images/LOTR.jpg'

function LOTR() {
 
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
              <h1 className='text-3xl font-bold'>The Lord of The Rings</h1>
              <p className='my-4'>Febraury 5,2017</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-80 shadow-2xl border-solid border-2 border-gray-300 rounded-xl " src={lotr} alt="The Lord of The Rings Books"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>The Hobbit World and The Intricate Mythology</h3><br/>
               <p>The Lord of the Rings is a trilogy of epic fantasy novels written by J.R.R. Tolkien. Set in the fictional world of Middle-earth, the books tell the story of a hobbit named Frodo Baggins, who is tasked with destroying a powerful ring that could bring about the end of the world.</p>
               <br/>
               <p>One of the things that sets The Lord of the Rings apart from other works of fantasy is its richly detailed world-building. Tolkien created a vast and intricate mythology for Middle-earth, complete with its own history, languages, and cultures. The books are filled with maps, genealogies, and appendices that add to the sense of immersion in the world.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Strengths and Challenges</h3><br/>
               <p>Another strength of the books is the depth and complexity of their characters. From Frodo and Sam to Gandalf and Aragorn, the characters are all well-rounded and nuanced. They each have their own motivations and struggles, and their relationships with each other are often fraught with tension and conflict.</p>
               <br/>
               <p>One of the challenges of reading The Lord of the Rings is its length and complexity. The books are dense and can be slow-moving at times, and the many characters and subplots can be overwhelming. But for those who are willing to invest the time and effort, the rewards are immense.</p>
            </div>
        </div>
    </div>
  )
}

export default LOTR