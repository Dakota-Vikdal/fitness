import { useHistory } from 'react-router-dom'

function NavButton() {
    const history = useHistory()
    return (
        <button onClick={ () => history.goBack()}>
            back
        </button>
    )
}

export default NavButton