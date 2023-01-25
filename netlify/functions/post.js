
import posts from './data/posts.json'

export const handler = async () => {
  // Generates a random index based on the length of the jokes array
  const randomIndex = Math.floor(Math.random() * posts.length)
  const randomPost = posts[randomIndex]

  // Netlify Functions need to return an object with a statusCode
  // Other properties such as headers or body can also be included.
  return {
    statusCode: 200,
    body: JSON.stringify(randomPost),
  }
}
