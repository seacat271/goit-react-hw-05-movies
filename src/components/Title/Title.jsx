import { TextTitle } from "./Title.styled"
import PropTypes from 'prop-types'
export const Title = ({text}) => {
    return ( <TextTitle>{text}</TextTitle>)
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}