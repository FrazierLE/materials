import React, { useState } from 'react'
import { CardMedia, Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import ArticleCard from '../ArticleCard/ArticleCard'
import ModalCard from '../ModalCard/ModalCard';

const ArticlesContainer = (props) => {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState([])
  const [styling, setStyling] = useState({})

  const showDetails = (id) => {
    const filterArticles = props.articles.filter(article => article.title === id.target.id)
    setModal(filterArticles)
    setOpen(true)
    setStyling({})
  }

  const closeModal = () => {
    setOpen(false)
    setStyling({})
  }
  
  const list = props.articles.map((article, index) => (
  <Grid item key={index} xs={12} sm={6} md={4}>
   <ArticleCard 
      key={index}
      id={index}
      title={article.title}
      image={article.multimedia?.[0].url || 'https://serpstat.com/files/img/34/1676542462.4999.png'}
      articles={props.articles}
      showDetails={showDetails}
    />
  </Grid>))
  return (
    <Container sx={{ py: 0, display: 'flex', alignContent: 'center'}} maxWidth="md">
       {open && <ModalCard modal={modal} closeModal={closeModal} open={open} key={modal[0].uri.slice(14)}/>} 
      <Grid container spacing={2} style={{...styling, cursor: 'pointer'}}>
        {list}
      </Grid>
    </Container>
  )
}

export default ArticlesContainer
