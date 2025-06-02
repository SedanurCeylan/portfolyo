import React from 'react'

const page = () => {
  return (
        <div className='container mx-auto py-10 my-10'>
            <h1 className='text-8xl font-semibold text-center'>İletişim</h1>
            <p className='text-center mt-4 text-l'>Herhangi bir sorunuz varsa lütfen aşağıdaki formu doldurun.</p>
            
            <form className='mt-8 max-w-md mx-auto bg-(--formrenk) p-10 m-10'>
            <div className='mb-4'>
                <label className='block text-xl mb-2' htmlFor='name'>Adınız</label>
                <input className='w-full p-2 border border-gray-300 rounded bg-(--bgrenk)' type='text' id='name' name='name' required />
            </div>
            
            <div className='mb-4'>
                <label className='block text-xl mb-2' htmlFor='email'>E-posta</label>
                <input className='w-full p-2 border border-gray-300 rounded bg-(--bgrenk)' type='email' id='email' name='email' required />
            </div>
            
            <div className='mb-4'>
                <label className='block text-xl mb-2' htmlFor='message'>Mesajınız</label>
                <textarea className='w-full p-2 border border-gray-300 rounded bg-(--bgrenk)' id='message' name='message' rows='4' required></textarea>
            </div>
            
            <button type='submit' className='bg-(--textrenk) text-(--bgrenk) px-4 py-2 rounded'>Gönder</button>
            </form>
        </div>
  )
}

export default page;