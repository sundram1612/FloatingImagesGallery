import React, { useState, useEffect } from 'react'

const Login = ({onLoginSuccess}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    // Email validation function logics
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setEmailError('')
        setPasswordError('')

        // validate email
        if(!validateEmail(email)){
            setEmailError('Invalid email')
            return;
        }

        // Generate correct password
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const correctPassword = email.slice(0, 4) + hours + minutes;

        // validate password
        if(password !== correctPassword){
            setPasswordError(
                <span>
                    Incorrect Password, The correct password should be: <strong className='underline text-black font-sans'>{correctPassword}</strong>
                </span>
            );
            return;
        }
                
        // If successfull, notify parent component
        onLoginSuccess();
    }

    useEffect(() => {
        // Check if user is already logged in
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn) {
          onLoginSuccess();
        }
      }, []);
    
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
        <form onSubmit={handleLogin} className='bg-white p-6 rounded-lg shadow-xl max-w-sm w-full'>
            <h2 className='font-bold mb-4 text-center font-[Sail] text-[50px] text-[#191124] tracking-wider leading-none'>Login</h2>

            <div className='mb-4 EmailContainer'>
                <label className='block text-gray-700 font-[Montserrat] font-[600]' htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    name='email'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    className='placeholder:text-[15px] w-full p-2 border-[1.5px] focus:border-green-200 outline-none rounded mt-1 font-[Montserrat] font-[500] focus:bg-sky-100 '
                    required
                />
                {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p> }
            </div>

            <div className="mb-4 PasswordContainer">
                <label className="block text-gray-700 font-[Montserrat] font-[600]" htmlFor="password">Password:</label>
                <input 
                    type="text" 
                    id="password"
                    name='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="placeholder:text-[15px] w-full p-2 border-[1.5px] focus:border-green-200 outline-none rounded mt-1 font-[Montserrat] font-[500] focus:bg-sky-100"
                />
                {passwordError && <p className='text-red-500 text-sm mt-1'>{passwordError}</p> }
            </div>

            <button type='submit' className='font-[Montserrat] font-[600] bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-700 transition'>
                Login
            </button>
        </form>
    </div>
  )
}

export default Login