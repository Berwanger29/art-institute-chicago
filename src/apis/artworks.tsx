import { useState } from "react"
import { api } from "./apiConfig"


export async function useGetArtwork() {

    const [artworks, setArtworks] = useState()

    try {
        const res = await api.get('/artworks?page=2&limit=100')
        if (res) {
            
            setArtworks(res)
            return artworks
        }
    } catch (error) {
        return error
    }
}