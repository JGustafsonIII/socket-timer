import { connect } from './api';

function App() {
  connect((message) => {
    console.log(message);
  });

  return <div className='App'>Hi</div>;
}

export default App;
