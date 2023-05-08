import React,{useRef, useState} from 'react'
import NavBar from './NavBar'
import blogImage from './Images/blogRead.jpg'
import dress from './Images/dresses.jpg'
import handbag from './Images/handbag.jpg'
import shoes from './Images/shoes.jpg'
import hp from './Images/harry_potter_book.jpg'
import lotr from './Images/LOTR.jpg'
import percy from './Images/percy_jackson.jpg'
import classico from './Images/el-classico.png'
import cricket from './Images/stumps.jpg'
import basketball from './Images/basketball.jpg'
import halley from './Images/halley_comet.jpg'
import blueMoon from './Images/blue_moon.jpg'
import black_hole from './Images/black_hole.jpeg'



function Home() {
  
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();


  const navigateDiv1 = () => window.scrollTo({
    top: ref1.current.offsetTop -100, 
    behavior: "smooth"
  })
  const navigateDiv2 = () => window.scrollTo({
    top: ref2.current.offsetTop -100, 
    behavior: "smooth"
  })
  const navigateDiv3 = () => window.scrollTo({
    top: ref3.current.offsetTop -100, 
    behavior: "smooth"
  })
  const navigateDiv4 = () => window.scrollTo({
    top: ref4.current.offsetTop -100, 
    behavior: "smooth"
  })
  
  const containerStyle = {
    backgroundImage: `url(${blogImage})`,
    backgroundSize: 'cover',
    backgroundPosition:'center -170px',
    backgroundAttachment:'scroll',
    filter: 'brightness(70%)',
  };
  const textStyle = {
    filter: 'brightness(140%)'
  };

  const navigateDress=()=>{
    window.location.href="/home/dress"
  }

  const navigateBag=()=>{
    window.location.href="/home/handbag"
  }

  const navigateShoe=()=>{
    window.location.href="/home/shoes"
  }

  const navigateHarry=()=>{
    window.location.href="/home/hp"
  }

  const navigateRings=()=>{
    window.location.href="/home/lotr"
  }

  const navigatePercy=()=>{
    window.location.href="/home/pj"
  }

  const navigateClassico=()=>{
    window.location.href="/home/classico"
  }

  const navigateCricket=()=>{
    window.location.href="/home/cricket"
  }

  const navigateBasket=()=>{
    window.location.href="/home/basketball"
  }

  const navigateBlack=()=>{
    window.location.href="/home/blackhole"
  }

  const navigateHalley=()=>{
    window.location.href="/home/halley"
  }

  const navigateMoon=()=>{
    window.location.href="/home/bluemoon"
  }

  return (
      <div>
        <NavBar functions={{
          button1Click: navigateDiv1,
          button2Click: navigateDiv2,
          button3Click: navigateDiv3,
          button4Click: navigateDiv4
        }}/>
        <div className="display:block h-60 w-11/12 rounded-3xl mx-auto flex items-center my-24" style={containerStyle}>
          <h1 className='text-white text-5xl font-bold font-sans mx-left' style={textStyle}>&nbsp; Read our blog</h1>
       </div>
       <div className='my-20 mx-14'>
           <h1 className='bg-gradient-to-r from-purple-800 via-pink-800  to-cyan-800 inline-block text-transparent bg-clip-text font-bold text-5xl'>Fly With the Way of Words!</h1>
       </div>
       {/* shopping */}
       <div className='my-24 mx-14' >
            <h1 className='bg-gradient-to-r from-red-600  to-cyan-300 inline-block text-transparent bg-clip-text font-bold text-5xl'ref={ref1} >Shopping:</h1> 
            <div className='my-6 grid grid-cols-3 gap-10'>
              {/* col-1 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={dress} alt="Dress"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Gucci Dress</div>
                        <p class="text-gray-700 text-base">
                        Embrace your confidence with the perfect dress, empowering you to conquer the world in style.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateDress}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-2 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={handbag} alt="Handbag"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Trendy Handbags!</div>
                        <p class="text-gray-700 text-base">
                        Upgrade your style with a statement handbag that speaks volumes, while carrying all your essentials in style.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateBag}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-3 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={shoes} alt="Shoes"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Shoes</div>
                        <p class="text-gray-700 text-base">
                         Step up your style with the perfect pair of shoes, the ultimate expression of style and comfort.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateShoe}>Read Blog</button>
                    </div>    
                </div>
              </div>
            </div>
        </div>
         {/* Books */}
        <div className='my-16 mx-14'>
            <h1 className='bg-gradient-to-r from-red-600  to-cyan-300 inline-block text-transparent bg-clip-text font-bold text-5xl'  ref={ref2}>Books:</h1> 
            <div className='my-6 grid grid-cols-3 gap-10'>
              {/* col-1 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={hp} alt="Harry Potter Books"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Harry Potter</div>
                        <p class="text-gray-700 text-base">
                           Experience the magic of Harry Potter, where the impossible becomes possible and adventure awaits at every turn.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateHarry}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-2 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={percy} alt="Percy Jackson Books"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Percy Jackson</div>
                        <p class="text-gray-700 text-base">
                           Unleash the power of Greek mythology and join Percy Jackson on a heroic quest of mythic proportions.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigatePercy}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-3 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={lotr} alt="Lord of The Rings Books"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Lord of The Rings</div>
                        <p class="text-gray-700 text-base">
                          Journey to Middle-earth and witness the ultimate battle between good and evil in the timeless epic, LOTR.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateRings}>Read Blog</button>
                    </div>    
                </div>
              </div>
            </div>
        </div>
         {/* Entertainment */}
        <div className='my-16 mx-14'>
            <h1 className='bg-gradient-to-r from-red-600  to-cyan-300 inline-block text-transparent bg-clip-text font-bold text-5xl'  ref={ref3}>Entertainment:</h1> 
            <div className='my-6 grid grid-cols-3 gap-10'>
              {/* col-1 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={classico} alt="El Classico Poster"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">El-Classico</div>
                        <p class="text-gray-700 text-base">
                          Experience the intensity and passion of football's greatest rivalry in El Clásico, where the legends battle!.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateClassico}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-2 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={cricket} alt="Cricket Stumps Image"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">The Gentleman's Game</div>
                        <p class="text-gray-700 text-base">
                         Enter the timeless world of cricket, where the gentleman's game meets the thrill of competition and camaraderie.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateCricket}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-3 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={basketball} alt="Basketball Image"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Basketball - You beauty!</div>
                        <p class="text-gray-700 text-base">
                         Get ready to be dazzled by the fast-paced action and explosive energy of basketball - The Dunkology!
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateBasket}>Read Blog</button>
                    </div>    
                </div>
              </div>
            </div>
        </div>
         {/* Astronomy */}
        <div className='my-16 mx-14'>
            <h1 className='bg-gradient-to-r from-red-600  to-cyan-300 inline-block text-transparent bg-clip-text font-bold text-5xl' ref={ref4}>Astronomy:</h1> 
            <div className='my-6 grid grid-cols-3 gap-10' >
              {/* col-1 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={black_hole} alt="Black Hole Image"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Black Holes</div>
                        <p class="text-gray-700 text-base">
                         Unlock the secrets of the universe and explore the mind-boggling mysteries of black holes, the ultimate cosmic enigma.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateBlack}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-2 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={halley} alt="Halley's Comet Image"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Halley's Comet</div>
                        <p class="text-gray-700 text-base">
                         Experience the once-in-a-lifetime wonder of Halley's Comet, a cosmic spectacle that dazzles our eyes.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateHalley}>Read Blog</button>
                    </div>    
                </div>
              </div>
              {/* col-3 */}
              <div class="max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden shadow-blue-gray-800 shadow-2xl">
                <img class="w-full h-3/5" src={blueMoon} alt="Blue Moon Image"/>
                <div class="px-6 py-4">
                    <div>
                      <div class="font-bold text-xl mb-2">Blue Moon</div>
                        <p class="text-gray-700 text-base">
                          Discover the transformative power of the Blue Moon, an astrological phenomenon that holds the key to your destiny.
                        </p>
                    </div>
                    <div class="pt-4 pb-2">
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={navigateMoon}>Read Blog</button>
                    </div>    
                </div>
              </div>
            </div>
        </div>
        <div className='bg-gray-900 pt-4 pb-4'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white font-sans grid grid-cols-3 gap-6'>
              <div>
                <h3><b>Adress:</b></h3>
                <p>
                  101,Government College of Technology,<br/>
                  Coimbatore - 641013.
                </p>
              </div> 
              <div>
                <h3><b>Mobile:</b></h3>
                <p>+91 9092886103</p>
              </div> 
              <div>
                <h3><b>E-mail:</b></h3>
                <a href="mailto:dark.dimension.71@gmail.com"><u>BlogTube Mail</u></a>
              </div>
            </div>
        </div>
          
    </div>

   
  )
}

export default Home