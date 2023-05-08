import React from 'react'
import cricket from '../Images/stumps.jpg'

function Cricket() {
 
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
              <h1 className='text-3xl font-bold'>The Gentleman's Game</h1>
              <p className='my-4'>May 23,2018</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-80 h-96 shadow-2xl border-solid border-2 border-gray-300 rounded-xl" src={cricket} alt="Cricket Stumps and Bails"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Spirit of Sportsmanship</h3><br/>
               <p>Cricket is often referred to as the "gentleman's game" due to the spirit of sportsmanship and fair play that it embodies. It is a game that is played with great respect for tradition, and with a focus on teamwork and individual skill.</p>
               <br/>
               <p>One of the key elements that makes cricket a gentleman's game is its emphasis on fair play. Players are expected to adhere to a strict code of conduct, both on and off the field. This includes showing respect to opponents, umpires, and spectators, and refraining from any behavior that might bring the game into disrepute.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Teamwork and The Tradition</h3><br/>
               <p>Another aspect of cricket that embodies the spirit of the gentleman's game is its focus on teamwork. Although individual skill is important, cricket is a sport that requires players to work together in order to achieve success. This means that players must put the needs of the team ahead of their own personal goals, and support their teammates both on and off the field.</p>
               <br/>
               <p>Cricket is also a sport that is steeped in tradition, and this is another element that contributes to its reputation as a gentleman's game. From the iconic white clothing worn by players to the time-honored rituals of the pre-match coin toss and post-match handshake, cricket is a sport that is rich in history and heritage.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Reputation</h3><br/>
               <p>In addition, cricket is a sport that is known for its sense of fair play and sportsmanship. This is reflected in the way that players conduct themselves both on and off the field, and in the way that they interact with each other and with officials. Cricket has a reputation for being a sport that is played with a high degree of respect and integrity, which is something that is greatly valued by fans around the world.</p>
            </div>
        </div>
    </div>
  )
}

export default Cricket