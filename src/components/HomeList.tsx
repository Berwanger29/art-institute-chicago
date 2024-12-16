import { Artwork } from "../@types/artwork";


export function HomeList({ alt_text, id, thumbnail, title }: Artwork) {
    console.log(alt_text, thumbnail)
    return (
        <div className="w-full" key={id}>
            <p>{title}</p>

        </div>
    )
}