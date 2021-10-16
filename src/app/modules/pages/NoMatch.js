import {Card} from 'react-bootstrap';
import logo from '../../assets/404.jpg'

function NoMatch(){
    return (
        <Card style={{maxWidth: '800px', margin: "0 auto"}}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Text>
              Sorry, but that page has not been found.
            </Card.Text>
          </Card.Body>
        </Card>
        )
}


export default NoMatch;