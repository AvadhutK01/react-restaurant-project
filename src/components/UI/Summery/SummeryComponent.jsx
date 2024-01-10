import React from 'react'

const SummeryComponent = () => {
    return (
        <div className='shadow-xl'>
            <div className=' flex flex-col items-center justify-center'>
                <img src="buffet.jpg" className='h-[30rem] w-full' alt="img" />
                <div className='w-[30rem] text-black border-2 p-7 rounded-xl bg-white absolute top-72 shadow-2xl'>
                    <p className='font-bold'> "Savor the Flavor, Delivered to Your Doorstep!"</p>
                    <p> Indulge your taste buds with our delectable delights delivered right to your doorstep!
                        Our restaurant offers a diverse menu of mouthwatering dishes prepared with the finest ingredients,
                        ensuring a delightful dining experience in the comfort of your home.</p>
                </div>
            </div>

        </div>
    )
}

export default SummeryComponent