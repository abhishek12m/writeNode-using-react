import { Link } from "react-router-dom"
import pagenotfound from '../assets/images/pagenotfound.webp';
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
    useTitle("Page not found");
  return (
    <section className="pagenotfound">
        <p> 404 / Page Not Found</p>
        <img src={pagenotfound} alt="PageNotFound"/>
        <Link to="/"><button>Back to home</button></Link>
    </section>
  )
}
