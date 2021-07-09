import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null) 

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(response => {
          console.log(response)
          if(!response.ok){
              throw Error('could not fetch the data fot that resource')
          }
          return response.json()
      })
      .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
      })
      .catch((e) => {
          setIsPending(false)
          setError(e.message)
      })
    }, 1000)
  }, [url])
  
  return { data, isPending, error }
}

export default useFetch