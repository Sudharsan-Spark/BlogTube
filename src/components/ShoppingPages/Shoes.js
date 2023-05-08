import React from 'react'
import shoes from '../Images/shoes.jpg'

function Shoes() {
 
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
              <h1 className='text-3xl font-bold'>Shoes That Go With Everything!</h1>
              <p className='my-4'>January 11,2023</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-80 shadow-2xl border-solid border-2 border-gray-300 rounded-xl " src={shoes} alt="A pair of shoes"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Oxfords</h3><br/>
               <p>Oxfords are a classic men's shoe. They can be worn with a suit or dressed down with jeans. They have a sleek, formal appearance, but can still be worn in a casual setting.They always look expensive, and they're also hard-wearing and comfortable. And they are men's shoes that go with everything! Just about! </p>
               <br/>
               <p>We love our oxford shoes, which is why we spend so much time curating our oxford shoe collection. But our biggest favorite and the most popular is this one!</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Sneakers</h3><br/>
               <p>Sneakers are a practical and comfortable choice that can be worn with just about anything. From jeans to shorts to chinos, sneakers are a go-to shoe for casual outfits.Sneakers have become more and more versatile over the years and are now seen as standard wear for a number of outfits and occasions. Some sneakers even go well with suits!</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Desert Boots</h3><br/>
               <p>Desert boots are a type of ankle boot that is made from soft, lightweight leather. Another one of those men's shoes that go with everything!</p>
               <br/>
               <p>They have a casual, laid-back style and are perfect for a variety of occasions. They can be worn with jeans, chinos, or shorts for a casual, relaxed look, or dressed up with slacks or a suit for a more formal occasion.</p>
            </div>
        </div>
    </div>
  )
}

export default Shoes