import React from 'react'
import blueMoon from '../Images/blue_moon.jpg'

function BlueMoon() {
 
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
              <h1 className='text-3xl font-bold'>Astonishing Blue Moon</h1>
              <p className='my-4'>April 23,2019</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-96 shadow-2xl border-solid border-2 border-gray-300 rounded-xl" src={blueMoon} alt="Image of a Blue Moon"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Is It Really Blue?</h3><br/>
               <p>The term "blue moon" has been used for centuries to describe an unusual astronomical event - the appearance of a second full moon within a single calendar month. This rare occurrence happens once every 2.7 years, and it has captured the imagination of people around the world.</p>
               <br/>
               <p>Despite its name, a blue moon does not actually appear blue in color. Instead, the term "blue" is thought to have originated from an old English phrase, "belewe moon", which meant "betrayer moon". This was because the appearance of a second full moon in a month could sometimes throw off the timing of seasonal events, such as the planting of crops.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Impact on Tides</h3><br/>
               <p>While the appearance of a blue moon may be rare, it is not particularly significant from an astronomical standpoint. The moon's appearance and behavior are largely unaffected by the occurrence of a blue moon, and it does not have any major impact on the tides or other natural phenomena.</p>
               <br/>
               <p>Despite this, the appearance of a blue moon remains a fascinating and mysterious event that captures the imagination of people around the world. Whether viewed as a symbol of change and transformation or simply as a beautiful and rare occurrence, the blue moon is a reminder of the beauty and wonder of the universe in which we live.</p>
            </div>
        </div>
    </div>
  )
}

export default BlueMoon