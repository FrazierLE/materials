import React, {useEffect, useState} from 'react';
import { fetchData } from './apiCalls';
import Header from './Header';
import ArticlesContainer from './ArticlesContainer';
import Form from './Form';
import FilterMenu from './FilterMenu';

const App = () => {
  const [ articles, setArticles ] = useState([])
  const [category, setCategory] = useState('home')
  const [searchResults, setSearchResults] = useState('')

  const initApp = (category) => {
    fetchData(category)
      .then(data => {
        setArticles(data.results)})
  }

  useEffect(() => {
    initApp(category)
  }, [category])

  const filterArticles = (search) => {
  const filteredSearch = articles?.filter(article => article.title.toLowerCase().match(search.toLowerCase()))
  setArticles(filteredSearch)
  if(filteredSearch.length > 0) {
    setSearchResults('')
  }
  else {
    setSearchResults('Sorry your search did not match any of the articles. Please adjust your search.')
  }
}

const resetFilter = () => {
  initApp(category)
  setSearchResults('')
}

  return (
    <div>
      <Header />
      <FilterMenu />
      <Form filterArticles={filterArticles} resetFilter={resetFilter}/>
      <ArticlesContainer articles={articles}/>
    </div>
  )
   
}

export default App


