import './App.css';
import Like from './components/likes';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Like store={store}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
