import React, { useEffect, useState, useMemo } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  
  const data = useLoaderData()

  const githubScore = useMemo(() => {
    console.log("Calculating GitHub score...");
    return data.followers * 2 + data.public_repos * 5;
  }, [data.followers, data.public_repos]);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Score: {githubScore}
      <br />
      Repos: {data.public_repos}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rishabjain13')
    return response.json()
}