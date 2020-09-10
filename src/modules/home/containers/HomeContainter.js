/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import profile from "../img/profileCard.png";
import * as c from '../constants';

function HomeContainer(){

    return(
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    

        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
        
    
            <div className="p-4 md:p-12 text-center lg:text-left">

                <div 
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
                </div>
                
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{c.NAME}</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-900 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    <i class="fa fa-briefcase"/>
                    <span className="ml-5">Jr. Front-End Software Engineer</span>
                </p>
                <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                    <i className="fa fa-building"/>
                    <a className="ml-6" href="https://www.multisyscorp.com/" target="_blank" without rel="noopener noreferrer">Multisys Technologies Corporation</a>
                </p>
                <p className="pt-8 text-sm">M | 22 | General Trias, Cavite</p>
    
                <div className="pt-12 pb-8">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Get In Touch
                    </button> 
                </div>
    
                <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                    <a className="link" href="https://www.facebook.com/lmr021" data-tippy-content="@facebook_handle" target="_blank" without rel="noopener noreferrer">
                        <i class="fa fa-2x fa-facebook-square hover:text-blue-600"/>
                    </a>
                    <a className="link" href="https://twitter.com/lmrl021" data-tippy-content="@facebook_handle" target="_blank" without rel="noopener noreferrer">
                        <i class="fa fa-2x fa-twitter hover:text-blue-500"/>
                    </a>
                    <a className="link" href="https://github.com/lcsaria" data-tippy-content="@facebook_handle" target="_blank" without rel="noopener noreferrer">
                        <i class="fa fa-2x fa-github hover:text-gray-400"/>
                    </a>
                </div>
                
    
            </div>
    
        </div>

        <div className="w-full lg:w-2/5">
            <img src={profile} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="lmrl"/>            
        </div>    
    </div>
    );
}

export default HomeContainer;