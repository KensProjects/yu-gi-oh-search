import axios from "axios"
import { create } from "zustand"

type TCardImages = {
    id: number, image_url: string, image_url_small: string, image_url_cropped: string
}

export type TCardData = {
    id: number | null,
    name: string | null,
    type: string | null,
    frameType: string | null
    desc: string | null,
    atk: number | null,
    def: number | null,
    level: number | null,
    race: string | null,
    attribute: string | null,
    archetype: string | null,
    scale: string | number | null,
    linkval: string | number | null,
    linkmarkers: string | null,
    card_images: TCardImages[] | null
}

export const initialCardInfo: TCardData = {
    id: null,
    name: "",
    type: "",
    frameType: "",
    desc: "",
    atk: null,
    def: null,
    level: null,
    race: "",
    attribute: null,
    archetype: "",
    scale: null,
    linkval: null,
    linkmarkers: null,
    card_images: null
}


export type CardStore = {
    cardName: string,
    cardInfo: TCardData | null,
    setName: (string: string) => void
    setCardInfo: (string: string) => void
}


export const useCardStore = create<CardStore>()((set) => ({
    cardName: "Kuriboh",
    cardInfo: null,
    setName: (newCardName: string) => set({ cardName: newCardName }),
    setCardInfo: async (cardName: string) => {
        try {
            const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`);
            const data = await res.data.data[0];
            console.log(data)
            set({ cardInfo: data })
            return data

        } catch (error: any) {
            if (error) {
                return (error.response.data.error)
            }
        }

    }

}))