import React from 'react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';


const Footer = () => {
    return (
        <div>
            <div className='w-full h-[200px] bg-[#001931] mt-5 text-white flex justify-around items-center '>

    <div>
        <h1 className='text-2xl font-medium'>Hero.io</h1>
        <p className='text-[18px] font-semibold'>contact us: 50836252</p>
        <p className='text-[16px] font-semibold'>address: Mirpur-8,Dhaka, Bangladesh</p>
    </div>
        
        <div className='gap-5'>
<h1 className='text-2xl font-medium'>social links</h1>
  <Facebook />
      <Twitter />
          <Linkedin />
              <Instagram />
        </div>
    
</div> 
        </div>
    );
};

export default Footer;