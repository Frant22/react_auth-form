import './styles/App.scss';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1 className="App__heading">
        Log in
      </h1>

      <div className="App__signup">
        <div>Don’t have an account?</div>
        <a className="App__link link" href="/#">&nbsp;Sign up</a>
      </div>

      <a href="/#" className="App__signin App__signin--google button link">
        Continue with Google
      </a>

      <a href="/#" className="App__signin App__signin--microsoft button link">
        Continue with Microsoft
      </a>

      <div className="App__separation">
        <div className="decoration"></div>
        <div>
          or
        </div>
        <div className="decoration"></div>
      </div>
      <Form />
    </div>
  );
}

export default App;
