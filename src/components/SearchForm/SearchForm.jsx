import { Input, SearchButton, Form} from "./SearchForm.styled"
export const SearchForm = ({onHandleSubmit}) => {
    return(
        <>
        <Form onSubmit={onHandleSubmit}>
            <Input name="query" autoComplete="off"/>
            <SearchButton type="submit">Search</SearchButton>
        </Form>
   
        </>
    )
}
