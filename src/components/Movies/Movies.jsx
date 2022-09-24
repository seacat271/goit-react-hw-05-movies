import { Outlet } from "react-router-dom"


export const Movies = () => {
return(
    <>
    <form>
        <input name="query" autoComplete="off" />
        <button type="submit">Search</button>
    </form>
    <Outlet/>
    </>
)
} 