
import {Card, Button, Form} from 'react-bootstrap';

import PollHeader from './PollHeader'
import PollImport from './PollImport'

function PollListing(props) {
    // si un cookie existe
    // lister les doodles présents dans le cookie. Si doodle a été créé par le user, ajouter un bouton d'admin
    // ajouter un bouton pour rajouter un doodle
    // ajouter un bouton pour créer un doodle
    return (
        <div>
            {props.listing.map(poll => {
                return <PollHeader poll={poll}/>
            })}
            <Button variant="outline-primary">Create Pull</Button>
        </div>
    ) 
}

export default PollListing;