'use client'

import { CustomButton } from '@/components'
import Image from 'next/image'

export default function Hero() {
    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title leading-tight'>
                    Encuentre, reserve o alquile un coche - ¡rápida y fácilmente¡
                </h1>

                <p className='hero__subtitle'>
                    Optimice su experiencia de alquiler de vehículos con nuestro sencillo proceso de reserva.                </p>

                <CustomButton
                    title='Explorar autos'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <div className='flex items-center h-full'>
                        <Image
                            src={'/hero.png'}
                            width={1000}
                            height={1000}
                            alt='Hero image'
                            className='object-contain'
                        />
                        <div className='hero__image-overlay' />
                    </div>
                </div>
            </div>
        </div>
    )
}
