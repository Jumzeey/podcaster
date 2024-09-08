import { PodcastCardProps } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

const PodcastCard: React.FC<PodcastCardProps> = ({ podcastId, imgURL, description, title }) => {
  return (
    <div className='cursor-pointer'>
        <figure className='flex flex-col gap-2'>
            <Image 
                width={174}
                height={174}
                alt={title}
                src={imgURL}
                className='w-full aspect-square h-fit rounded-xl 2xl:size-[200px]'
            />
            <div className='flex flex-col'>
                <h1 className='text-base truncate font-bold text-white-1'>{title}</h1>
                <h2 className='text-12 text-white-4'>{description}</h2>
            </div>
        </figure>
    </div>
  )
}

export default PodcastCard