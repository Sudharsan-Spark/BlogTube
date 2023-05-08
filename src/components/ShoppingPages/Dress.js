import React from 'react'
import dress from '../Images/dresses.jpg'

function Dress() {
 
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
              <h1 className='text-3xl font-bold'>Short vs Long HomeComing Dresses</h1>
              <p className='my-4'>November 20,2020</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-80 shadow-2xl border-solid border-2 border-gray-300 rounded-xl " src={dress} alt="A Gown"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>Short Dresses</h3><br/>
               <p>Generally speaking, homecoming is more of a welcome-back event.Homecoming dances oscillate more on the semi-formal side and call for attires that are more casual. Going for a short dress that is cute and not very revealing (it's a school event, after all) would be a great choice. </p>
               <br/>
               <p>Short dresses come in countless varieties and can flatter just about any body type. The popular homecoming short dress choices include tight-fitted short pieces coupled with embellishments or sparkling details. These dresses add a heavy dose of glam to the outfit. You can even consider chic pieces with sweetheart necklines and flowy skirts. A-line dresses are another favorite for this event. You can never quite go wrong with this homecoming classic. Body-con silhouettes, bedazzled designs, minimal styles, or poofy numbers - the wide variety in this category will also give you the dress that aligns with your personality. </p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Long Dresses</h3><br/>
               <p>If your high school welcomes fully formal dresses, long dresses can be an elegant option. A great way to determine the formality of the event would be to observe what others are planning to wear to the event. </p>
               <br/>
               <p>Long dresses offer countless varieties of styles and silhouettes. The best ones for a homecoming event would be mermaid dresses, sheath gowns, trumpet dresses, and the popular A-line dresses. These dresses come in a variety of necklines, cuts, and fittings. Some of them include illusions, two-piece outfits, high-neck dresses, and off-shoulder dresses. NewYorkDress offers a goldmine of long-length outfits that would be perfect for your homecoming event. Since long dresses come with a look of sophistication, it's important to get your hair, makeup, and nails done tastefully to look absolutely stunning. Carrying an embellished handbag or a clutch with the dress would also be a great idea.</p>
            </div>
        </div>
    </div>
  )
}

export default Dress