import { Link } from "react-router-dom"
import pagenotfound from '../assets/images/pagenotfound.webp';

export const PageNotFound = () => {
  return (
    <section className="pagenotfound">
        <p> 404 / Page Not Found</p>
        <img src={pagenotfound} alt="PageNotFound"/>
        <Link to="/"><button>Back to home</button></Link>
    </section>
  )
}
