import React,{useState,useEffect, Fragment} from 'react'
import httpClient from './httpClient'
import userLogo from './Images/UserLogo.png'
import companyLogo from './Images/logo_2-removebg.png'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";



function NavBar({ functions }) {

  const handleButtonClick = (func) => () => func();

  const [user,setUser]=useState("")
  const [visible,setVisible]=useState(false)
  const [open1,setOpen1]=useState(false)
  const [open2,setOpen2]=useState(false)
  const [title,setTitle]=useState("")
  const [date,setDate]=useState("")
  const [content,setContent]=useState("")

  const handleOpen1 = () => setOpen1(!open1);
  const handleOpen2 = () => setOpen2(!open2);

  const logoutUser= async ()=>{
    const resp=await httpClient.post("//localhost:5000/logout")
    window.location.href="/"
  }


  const blogSubmitHandler =()=>{
    alert("Your request to add new blog has been submitted.\nWe'll review and add your blog to our collection later")
  }

  // const refreshHandler=(event)=>{
  //   event.preventDefault();
  // }

  useEffect(()=>{
    (async ()=>{
        try{
            const resp= await httpClient.get("//localhost:5000/@me")
            setUser(resp.data)
        }
        catch(error){
            console.log("Not Authenticated")
        }
    })()
  },[])

  const addBlog= async (e)=>{
    e.preventDefault();
    console.log(title)
    console.log(content)
    
    try{
        const resp =await httpClient.post("//localhost:5000/blog",{
            title,
            date,
            content,
        },{withCredentials: true});
         
       
        // window.location.href="/";
        alert("Your request to add new blog has been submitted.\nWe'll review and add your blog to our collection later")
    }
    catch(error){
        if(error.response.status===401){
            alert("Invalid Details")
        }
    }

  }

  return (
    <div className="sticky top-0 z-50">
     <nav className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <img className="block h-8 w-auto lg:hidden" src={companyLogo} alt="Your Company" />
                <img className="hidden h-8 w-auto lg:block" src={companyLogo} alt="Your Company" />
                <p>	&nbsp; &nbsp;</p>
                <a href="#" className='bg-gray-800 text-white font-serif rounded-md px-3 py-2'>BlogTube!</a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" onClick={handleButtonClick(functions.button1Click)} >Shopping</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleButtonClick(functions.button2Click)} >Books</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleButtonClick(functions.button3Click)} >Entertainment</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={handleButtonClick(functions.button4Click)} >Astronomy</a>
                </div>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* <!-- Profile dropdown --> */}
                    <Fragment>
                      <button className='bg-pink-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' role="menuitem" tabindex="-1" id="user-menu-item-0" onClick={handleOpen2}>Add new blog</button>
                      <Dialog open={open2} handler={handleOpen2} size="xs" className='fixed right-0 top-0 z-[1055]'>
                          <DialogHeader>Blog Details</DialogHeader>
                          <DialogBody divider>
                            <form onSubmit={(e)=>addBlog(e)}>
                              <label for="title" className='font-bold'>Blog Title:</label><br/>
                              <input name="title" type="text" className='border-solid border-2 border-gray-600 rounded-lg' value={title} onChange={(e)=>setTitle(e.target.value)} required/><br/><br/>
                              <label for="date" className='font-bold'>Choose Date:</label><br/>
                              <input name="date" type="date" min="2015-01-01" className='border-solid border-2 border-gray-600 rounded-md' value={date} onChange={(e)=>setDate(e.target.value)} required/><br/><br/>
                              <label for="content" className='font-bold'>Blog Content:</label><br/>
                              <textarea name="w3review" rows="4" cols="32" className='border-solid border-2 border-gray-600 rounded-xl' value={content} onChange={(e)=>setContent(e.target.value)} required/>
                              <Button color="green" type="submit" >
                                 <span onClick={blogSubmitHandler}>Submit</span>
                              </Button>
                            </form>
                          </DialogBody>
                          <DialogFooter>
                          <Button color="red" onClick={handleOpen2}>
                              <span>Close</span>
                          </Button>
                          </DialogFooter>
                      </Dialog>
                    </Fragment>
                <div className="relative ml-3">
                <div>
                    
                    <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-12 w-12 rounded-full" src={userLogo} onClick={()=>setVisible(!visible)} />
                    </button>
                </div>
                { visible && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                <Fragment>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0" onClick={handleOpen1}>Profile Details</a>
                                <Dialog open={open1} handler={handleOpen1} size="xs" className='fixed right-0 top-0 z-[1055]'>
                                    <DialogHeader>Profile Details</DialogHeader>
                                    <DialogBody divider>
                                      {user?(<div>
                                        <h3>Email:{user.email}</h3>
                                        <h3>ID:{user.id}</h3>
                                      </div> ):
                                      (<div>
                                        <h1>Not Authenticated</h1>
                                      </div>) }
                                    </DialogBody>
                                    <DialogFooter>
                                    <Button color="green" onClick={handleOpen1}>
                                        <span>Close</span>
                                    </Button>
                                    </DialogFooter>
                                </Dialog>
                                </Fragment>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={logoutUser}>Sign out</a>
                </div>}
                </div>
            </div>
            </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page" onClick={handleButtonClick(functions.button1Click)} >Shopping</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handleButtonClick(functions.button2Click)} >Books</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handleButtonClick(functions.button3Click)} >Entertainment</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={handleButtonClick(functions.button4Click)} >Astronomy</a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar


