import React from 'react'
import handbag from '../Images/handbag.jpg'

function HandBag() {
 
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
              <h1 className='text-3xl font-bold'>The Spring Handbag Lookbook</h1>
              <p className='my-4'>December 3,2022</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-80 shadow-2xl border-solid border-2 border-gray-300 rounded-xl " src={handbag} alt="A Handbag"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Old Hollywood Gold Glamour</h3><br/>
               <p>If you haven't seen Miley Cyrus's latest video for her hit single, Flowers, then you're probably the last person on earth who hasn't. And you've yet to fall in love with the hooded gold two-piece gown she wears in it. It's the hood that brings the look home. Redolent of Old Hollywood glamor, you'll see hoods on everything this year. But the evening looks take nostalgia for more elegant times to the limit — especially in extravagant gold! Pair this high-glamor look with the subtle sheen of the gold spring bags found in our Wedding Purse collection. This level of chic mystery demands an equally chic handbag. Don't forget to pair your look with sleek, sparkling heels to make an entrance no one will forget!</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Shake It Up With Fringe!</h3><br/>
               <p>All those filmy, fringed chiffon beach wraps can be fished out and given new life because 2023 is the year of fringe! You'll find fringe on everything from traditional “Davy Crockett” suede jackets to skirts, scarves, and earrings. Everywhere you look, fringe is adding the grace of movement to all kinds of clothing and accessories. Get in touch with your inner flapper with a fringe-covered dress, paired with the chic purses from our Evening Clutch collection. Whether you're fringed up to the eyeballs or sporting a pair of fringed statement accessories, Urban Expressions brings you the spring bags that elevate the trend.</p>
            </div>
        </div>
    </div>
  )
}

export default HandBag