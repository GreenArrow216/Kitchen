import './App.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
