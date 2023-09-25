import { FormEvent } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CardStore, useCardStore } from '../zustand/store'

export default function SearchBar() {

  const cardName = useCardStore((state: CardStore) => state.cardName)
  const setName = useCardStore((state: CardStore) => state.setName)
  const setCardInfo = useCardStore((state: CardStore) => state.setCardInfo)

  const { refetch } = useQuery({
    queryKey: ['card'],
    queryFn: () => setCardInfo(cardName),

    enabled: false,
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    refetch()

  }

  return (
    <>
      <nav className='w-full h-16 bg-gray-200 flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='bg-gray-300 h-2/4 flex justify-center items-center rounded-lg px-2'>
          <input type='text' value={cardName} onChange={e => setName(e.target.value)} required className='px-2' />
          <button type='submit'>Submit</button>
        </form>
      </nav>

    </>

  )
}
