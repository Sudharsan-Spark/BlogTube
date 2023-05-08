import React from 'react'
import basket from '../Images/basketball.jpg'

function Basket() {
 
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
              <h1 className='text-3xl font-bold'>Basketball - You beauty!</h1>
              <p className='my-4'>May 23,2018</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-96 shadow-2xl border-solid border-2 border-gray-300 rounded-xl" src={basket} alt="Basketball Image"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Pace and Passion</h3><br/>
               <p>Basketball is a sport that has captured the hearts of millions of fans around the world. It is a fast-paced, high-scoring game that requires skill, agility, and teamwork. Whether played at the highest levels of professional competition or in local pickup games, basketball is a sport that has something to offer for players of all ages and skill levels.</p>
               <br/>
               <p>One of the key elements that makes basketball so exciting is its fast-paced nature. The game is played on a relatively small court, which means that players are constantly in motion and must make split-second decisions in order to succeed. This creates an atmosphere of excitement and energy that is unmatched in many other sports.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Skill and Athleticism</h3><br/>
               <p>In addition, basketball is a sport that requires a high degree of skill and athleticism. Players must be able to run, jump, and move quickly in order to outmaneuver their opponents and make scoring opportunities. This means that basketball players must be in excellent physical condition, and must spend countless hours practicing their skills in order to improve.</p>
               <br/>
               <p>Another key element that makes basketball so special is its emphasis on teamwork. Although individual skill is important, basketball is a sport that requires players to work together in order to achieve success. This means that players must be able to communicate effectively, share the ball, and trust each other in order to achieve their goals.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>History and Culture</h3><br/>
               <p>Basketball is also a sport that has a rich history and culture. From the iconic slam dunks of players like Michael Jordan and LeBron James to the storied rivalries between teams like the Boston Celtics and Los Angeles Lakers, basketball has produced countless moments of drama and excitement over the years.</p>
            </div>
        </div>
    </div>
  )
}

export default Basket