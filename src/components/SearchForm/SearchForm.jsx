export const SearchForm = ({onHandleSubmit}) => {
    return(
        <>
        <form onSubmit={onHandleSubmit}>
            <input name="query" autoComplete="off"/>
            <button type="submit">Search</button>
        </form>
   
        </>
    )
}
