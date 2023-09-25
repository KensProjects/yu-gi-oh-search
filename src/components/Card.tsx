import { useCardStore } from "../zustand/store"
import { CardStore } from "../zustand/store"

export default function Card() {

  const cardInfo = useCardStore((state: CardStore) => state.cardInfo)

  if (cardInfo === null) {
    return null
  } else {
    return (
      <div className="flex flex-col justify-center items-center w-1/2 gap-2 border border-black text-center">
        <h2>Name: {cardInfo.name}</h2>
        <h2>ID: {cardInfo.id}</h2>
        
        {cardInfo.type && <h2>Type: {cardInfo.type}</h2>}
        {cardInfo.frameType && <h2>Frametype: {cardInfo.frameType}</h2>}

        {cardInfo.race && <h2>Race: {cardInfo.race}</h2>}
        {cardInfo.attribute && <h2>Atrribute: {cardInfo.attribute}</h2>}
        {cardInfo.level && <h2>Level: {cardInfo.level}</h2>}
        {cardInfo.atk && <h2>Attack: {cardInfo.atk}</h2>}
        {cardInfo.def && <h2>Defense: {cardInfo.def}</h2>}
        {cardInfo.scale && <h2>Scale: {cardInfo.scale}</h2>}
        {cardInfo.linkmarkers && <h2>Link Markers: {cardInfo.linkmarkers}</h2>}
        {cardInfo.archetype && <h2>Archetype: {cardInfo.archetype}</h2>}
        {cardInfo.linkval && <h2>Link Value: {cardInfo.linkval}</h2>}
        {cardInfo.desc && <h2>Description: {cardInfo.desc}</h2>}
        {cardInfo.card_images && <img src={cardInfo.card_images[0].image_url }/>}

      </div>
    )
  }

}
