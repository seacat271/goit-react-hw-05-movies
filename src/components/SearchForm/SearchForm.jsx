import { Input, SearchButton, Form} from "./SearchForm.styled";
import PropTypes from 'prop-types'
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

SearchForm.propTypes = {
    onHandleSubmit: PropTypes.func.isRequired,
}
