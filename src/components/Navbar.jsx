import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-textrenk py-4 border-b border-textrenk text-xl font-semibold'>
       

        <div className=''>
            Sedanur Ceylan
        </div>
        <div>
            <ul className='flex gap-7'>
                <li>
                    <a href="/">Anasayfa</a>
                </li>
                <li>
                    <a href="/">Hakkımda</a>
                </li>
                <li>
                    <a href="/">Proje</a>
                </li>
                <li>
                    <a href="/iletisim">İletişim</a>
                </li>
            </ul>
        </div>
        <div>
            21:58
        </div>
    </div>
  )
}

export default Navbar