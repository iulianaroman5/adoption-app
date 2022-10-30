import './sass/main.scss'
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Content from './components/Content';

function App() {

const searchFilter = (filter) => {

  console.log("Filtered by -> " , filter);
}

  return <>
  <Header />
  <NavBar searchFilter={searchFilter}/>
  <Content />
  </>
}

export default App;
