import {Button} from "./GoBackButton.styled";
import PropTypes from 'prop-types'
export const GoBackButton = ({pathButton}) => {
    return <Button to={pathButton}>Go back</Button>
} 

GoBackButton.propTypes = {
    pathButton: PropTypes.object.isRequired,
}