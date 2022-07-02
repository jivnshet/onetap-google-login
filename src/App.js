import './App.css';
import { useGoogleOneTapLogin} from "react-google-one-tap-login"
import { useState } from 'react';

function App() {

      const [name, setName]=useState('');
      const [email, setEmail]=useState('');
      
      useGoogleOneTapLogin({
        onSuccess: (response) => {
          setName(response.given_name);
          setEmail(response.email);
        },
        onError: (error)=>console.log(error),
        googleAccountConfigs: {
          client_id:"411920004998-nb17s9rkaa92u2bpov96620cpuvse4op.apps.googleusercontent.com"
        }
      })
    return (
      <div className='app'>
        {name}<br/>
        {email}
      </div>
    )

}

export default App;
