import useFetchCard from "../hooks/useFetchCard"
import { useCardStore } from "../zustand/store"
import { CardStore } from "../zustand/store"

export default function Card() {

  const { isLoading, isPending } = useFetchCard()

  const cardInfo = useCardStore((state: CardStore) => state.cardInfo)

  const gridListingProps = "w-full h-48 border border-black overflow-auto flex justify-center items-start"

  if (cardInfo === null) {
    return null
  } else if (isLoading || isPending) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="flex justify-center items-center w-full gap-2 text-center mt-4">
        {cardInfo.card_images && <img src={cardInfo.card_images[0].image_url} />}
        <div className="grid grid-cols-4 justify-center items-center w-full">
          <div className={gridListingProps}>Name: {cardInfo.name}</div>
          <div className={gridListingProps}>ID: {cardInfo.id}</div>

          {cardInfo.type && <div className={gridListingProps}>Type: {cardInfo.type}</div>}
          {cardInfo.frameType && <div className={gridListingProps}>Frametype: {cardInfo.frameType}</div>}

          {cardInfo.race && <div className={gridListingProps}>Race: {cardInfo.race}</div>}
          {cardInfo.attribute && <div className={gridListingProps}>Atrribute: {cardInfo.attribute}</div>}
          {cardInfo.level && <div className={gridListingProps}>Level: {cardInfo.level}</div>}
          {cardInfo.atk && <div className={gridListingProps}>Attack: {cardInfo.atk}</div>}
          {cardInfo.def && <div className={gridListingProps}>Defense: {cardInfo.def}</div>}
          {cardInfo.scale && <div className={gridListingProps}>Scale: {cardInfo.scale}</div>}
          {cardInfo.linkmarkers && <div className={gridListingProps}>Link Markers: {cardInfo.linkmarkers}</div>}
          {cardInfo.archetype && <div className={gridListingProps}>Archetype: {cardInfo.archetype}</div>}
          {cardInfo.linkval && <div className={gridListingProps}>Link Value: {cardInfo.linkval}</div>}
          {cardInfo.desc && <div className={gridListingProps}>Description: {cardInfo.desc}</div>}
        </div>
      </div>

    )
  }

}
