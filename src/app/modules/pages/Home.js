
import Cookies from 'universal-cookie';
import CryptoJS from 'crypto-js';
import UserForm from '../components/UserForm'
import PollListing from '../components/PollListing';

function Home() {

    const cookies = new Cookies();

    const encryptedData = cookies.get('userData');

    if (typeof encryptedData !== "undefined"){
        // Decrypt data
        const bytes = CryptoJS.AES.decrypt(encryptedData, 'my-secret-key@123');
        let userData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        

        return (<PollListing listing={userData.polls} />);
    } else {
        return (<UserForm/>);
    }


}


export default Home;