import { FormEvent } from 'react'
import useFetchCard from '../hooks/useFetchCard'
import { CardStore, useCardStore } from '../zustand/store'

export default function SearchBar() {

  const cardName = useCardStore((state: CardStore) => state.cardName)
  const setName = useCardStore((state: CardStore) => state.setName)

  const { refetch: fetchCard } = useFetchCard()

  function handleCardFetch(e: FormEvent) {
    e.preventDefault();
    fetchCard()
  }

  return (
    <>
      <nav className='w-full h-16 bg-gray-200 flex justify-around items-center'>
        <h1>Yu-Gi-Oh Search</h1>
        <form onSubmit={handleCardFetch} className='bg-gray-300 h-12 w-1/2 flex justify-center items-center rounded-lg p-1'>
          <input type='text' value={cardName} onChange={e => setName(e.target.value)} required className='px-2 py-1 w-full rounded-md outline-none' placeholder='Please enter the exact card name here...' />
          <button type='submit' className='w-16 flex justify-center items-center px-2'>Submit</button>
        </form>
      </nav>
    </>

  )
}
