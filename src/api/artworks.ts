import axios from "axios";
import { Artwork } from "../@types/artwork";


const req = axios.create({
    baseURL: "https://api.artic.edu/api/v1"
})

export async function getArtworks(): Promise<Artwork[]> {
    const result = await req.get('/artworks')
    return result.data.data
}