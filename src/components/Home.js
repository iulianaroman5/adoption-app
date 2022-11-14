import NavBar from './NavBar';
import Content from './Content';
import Header from './Header';
import { useState } from 'react';


const Home = () => {

  const [categories, setCategories] = useState([]);
  const [list, setList] = useState([]);

  const searchFilter = (filter) => {
    filter = filter.toLowerCase();
    const filteredList = Array.from(list).filter(el => el.type === filter);
    setList(filteredList);
  }


    return <>
        <Header />
          <NavBar listOfAnimals={categories} searchFilter={searchFilter} />
          <Content list={list} setList={setList} categories={setCategories} />
    </>
}

export default Home;