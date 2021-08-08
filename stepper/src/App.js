import {Stepper} from 'components';

import 'style/global.css';

function App() {
  return (
    <div className='app'>
      <Stepper mode='horizontal'/>
      <Stepper mode='vertical'/>
    </div>
  );
}

export default App;
