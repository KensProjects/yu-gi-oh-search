import { useQuery } from '@tanstack/react-query'
import { CardStore, useCardStore } from '../zustand/store'

export default function useFetchCard() {
    const cardName = useCardStore((state: CardStore) => state.cardName)
    const setCardInfo = useCardStore((state: CardStore) => state.setCardInfo)
  
    return useQuery({
        queryKey: ['card'],
        queryFn: () => setCardInfo(cardName),
        enabled: false
      })
    }