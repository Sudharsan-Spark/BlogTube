import React,{useState} from 'react'
import httpClient from './httpClient'


function Register() {
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const registerUser= async ()=>{
    console.log(email)
    console.log(pass)
    
    try{
        const resp =await httpClient.post("//localhost:5000/register",{
            email,
            password:pass,
        },{withCredentials: true});

        // window.location.href="/";
        alert("Your account has been created successfully. Please navigate to login page to log into your account")
    }
    catch(error){
        if(error.response.status===401){
            alert("Invalid Credentials")
        }
    }

  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl text-sky-700 font-semibold">Create new account:</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" />
                                <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div className="relative">
                                <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Password" />
                                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-2 py-1" type="button" onClick={()=>registerUser()}>Register</button>
                            </div>
                            <div className="relative">
                                <p className="mb-0 mt-2 pt-1 text-lg font-semibold">
                                Return to Login
                                <br/>
                                <a href="/" className="text-green-600"><u>Login</u></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register


