import React from 'react';
import pic from '../images/image-hero-desktop.png';


export const Body = () => {
  return (
    <div className='pt-40 pr-12 pb-40 pl-12'>
        <div className='flex ml-[300px]'>
            <div className='space-y-12 mr-[100px]'>
                <div>
                    <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl max-w-5xl lg:text-6xl tracking-tight item-center mx-auto'>
                            Make
                    </h1>

                    <h2 className='text-slate-900 font-extrabold text-4xl max-w-5xl lg:text-6xl tracking-tight item-center mx-auto'>
                        remote work
                    </h2>
                </div>
                
                <h3 className='text-lg text-slate-900 item-center max-w-5xl tracking-tight mx-auto'>
                    <p>Get your team in sync no matter your location.</p> 
                    <p>Streamline processes, create team rituals and</p>
                    <p>watch productivity soar.</p> 
                </h3>

                <button className='bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white tracking-tight h-12 px-6 rounded-lg flex items-center justify-center'>
                    Learn More
                </button>
            </div>
                
            <div className=''>
                <img src={pic} alt='logo' className='w-[250px] h-[250pt]'/>
            </div>
        </div>
    </div>
  )
}
