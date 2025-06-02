import React from 'react'
import { ArrowUpRightIcon,ArrowUpIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className='bg-(--textrenk) text-(--bgrenk)'>
<div className='text-2xl py-10 text-center'>BELKİ BURAYA BİR KAYAN YAZI</div>
    
    <div className='container mx-auto text-xl'>
 
       <div className='flex justify-between items-center py-10'>
            <ul className='flex flex-col gap-7'>
                <li>
                    <a href="https://www.linkedin.com/in/sedanur-ceylan-190702/" target='_blank' className='flex gap-1 items-center'>Linkedin
                    <ArrowUpRightIcon className="size-5" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/SedanurCeylan" target='_blank' className='flex gap-1 items-center'>Github
                         <ArrowUpRightIcon className="size-5" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sedanur_ceylan_/ " target='_blank' className='flex gap-1 items-center'>Instagram
                         <ArrowUpRightIcon className="size-5" />
                    </a>
                </li>
            </ul>
            <div className='w-[400px] text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga amet odio ipsum modi! Placeat corporis magni excepturi ullam sunt cumque soluta natus itaque sequi quae, recusandae saepe commodi neque.
            </div>
       </div>
       <div className='flex items-center justify-between mt-4 py-10'>
            <p>sdnrcyln2@gmail.com</p>
            <p>© 2025 Sedanur Ceylan</p>
            <p className='flex gap-1 items-center'> <ArrowUpIcon className="size-5" /> Başa Dön</p>
       </div>
    </div>
    </div>
  )
}

export default Footer