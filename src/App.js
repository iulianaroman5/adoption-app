import './sass/main.scss'
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAnimal from './components/AddAnimal';



function App() {

  // const [show, setShow] = useState(false);

  // const handleCloseModal = () => setShow(false);

  const searchFilter = (filter) => {

    console.log("Filtered by -> ", filter);
  }

  return <>
    <Header />
    {/* <AddModal
            display={show}
            hide={handleCloseModal}

        /> */}
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<>
          <NavBar searchFilter={searchFilter} />
          <Content  />
        </>} />
        <Route path='/add-animal' element={<AddAnimal />} />
      </Routes>
    </BrowserRouter>



  </>
}

export default App;
