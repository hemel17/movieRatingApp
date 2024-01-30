import { useLoaderData } from "react-router-dom"

const Movies = () => {
  const movies = useLoaderData();
  console.log(movies)
  return (
    <div>Movies are good</div>
  )
}
export default Movies