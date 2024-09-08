"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PageHeading from '@/components/PageHeading'
import PodcastCard from '@/components/PodcastCard'
import  PodcastData  from '@constants/PodcastData.json'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col mt-9 gap-9'>
      <section className="flex flex-col gap-6">
        <PageHeading title="Trending Podcasts" />
        <div className='podcast_grid'>
        {PodcastData.map(({ id, title, description, imgURL }) => (
          <PodcastCard 
            key= {id}
            imgURL= {imgURL}
            title = {title}
            description = {description}
            podcastId = {id}
          />
        ))}
        </div>
      </section>
    </div>
  )
}

export default Home