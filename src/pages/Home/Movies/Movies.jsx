import { useLoaderData } from "react-router-dom"

const Movies = () => {
  const moviesData = useLoaderData();
  const movies = moviesData.data.results;
  console.log(movies)
  return (
    <div>Movies are good</div>
  )
}
export default Movies