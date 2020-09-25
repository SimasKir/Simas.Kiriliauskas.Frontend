import React, {useState} from 'react';
import './App.scss';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AddBoxIcon from '@material-ui/icons/AddBox';

function App() {

  const [button, setButton] = useState({
    buttonSwitch: true,
    random: false
  });

  console.log(button);

  return (
    <div className="App">
      new project
    </div>
  );
}

export default App;
