import React from 'react'
import harry from '../Images/harry_potter_book.jpg'

function HP() {
 
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
              <h1 className='text-3xl font-bold'>Harry Potter</h1>
              <p className='my-4'>October 13,2018</p>
            </div>
            <hr className='my-4 bg-gray-700 h-1 rounded'/>
            <img className="my-4 mx-auto w-96 h-80 shadow-2xl border-solid border-2 border-gray-300 rounded-xl " src={harry} alt="Harry Potter Books"/>
            <div className='my-4 font-serif'>
               <h3 className='text-xl font-semibold'>The Wizarding World</h3><br/>
               <p>Harry Potter is a series of seven fantasy novels written by British author J.K. Rowling. The books follow the life of a young orphan boy named Harry Potter who discovers that he is a wizard and is whisked away to a magical world filled with adventure, danger, and friendship.</p>
               <br/>
               <p>The books are set in the wizarding world, a hidden society within the Muggle (non-magical) world, and are filled with magic, spells, creatures, and other fantastical elements. The series follows Harry's journey as he attends the Hogwarts School of Witchcraft and Wizardry, makes friends with Hermione Granger and Ron Weasley, and battles against the dark wizard Lord Voldemort.</p>
               <br/><br/>
               <h3 className='text-xl font-semibold'>Strengths and Popularity</h3><br/>
               <p>One of the strengths of the series is the way in which Rowling creates a fully-realized world, complete with its own history, mythology, and culture. From Quidditch matches to the Hogwarts houses, there are countless details that make the wizarding world feel like a real place. This attention to detail has helped to create a devoted fan base that has spent countless hours analyzing and theorizing about the books.</p>
               <br/>
               <p>Another aspect of the books that has contributed to their enduring popularity is the characters. Harry, Ron, and Hermione are all compelling protagonists, each with their own strengths and weaknesses. But even the supporting characters, such as Dumbledore, Snape, and Hagrid, are memorable and well-developed. The series also includes some truly memorable villains, such as Voldemort and his Death Eaters.</p>
            </div>
        </div>
    </div>
  )
}

export default HP