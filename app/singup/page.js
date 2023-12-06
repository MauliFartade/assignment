'use client';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";



export default function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const router = useRouter();

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password);  
        router.push('signin')
    };
    return(
        <>
            <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>

                    <form onSubmit={(e)=>e.preventDefault()}>
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" 
                            />

                        <input 
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Email" 
                            name="email"
                            id="email"
                            type="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required/>

                        <input 
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Password"
                            id="password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                            
                        <input 
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="confirm-Password"
                            id="passwordAgain"
                            name="passwordAgain"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => setPasswordAgain(e.target.value)}
                            required
                            />

                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                            disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
                            onClick={() => signup()}
                            className='button'
                        >Sign Up</button>

                    </form>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>

       
        </>
    )
}