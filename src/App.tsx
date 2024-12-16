import { useQuery } from "@tanstack/react-query"
import { getArtworks } from "./api/artworks"
import { HomeList } from "./components/HomeList"

function App() {

  const query = useQuery({
    queryKey: ['artwroks'],
    queryFn: getArtworks
  })

  return (
    <div className="h-screen bg-red-900">
      <h1 className="text-3xl font-bold">Art Institute of Chicago</h1>
      {query.isLoading && "...Carregando"}
      {
        query.data &&
        query.data.map(e => (
          <HomeList
            title={e.title}
            alt_text={e.alt_text}
            id={e.id}
            key={e.id}
            thumbnail={e.thumbnail}
          />
        ))
      }
    </div>
  )
}

export default App
