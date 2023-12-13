import React from 'react'
import Articles from '../../Components/Campaign-card/Campaign-card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link}  from 'react-router-dom'; 
import  { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

import './article.css';
const Article = () => {
    const [page, setPage] = useState(1)
  return (
    <>
    

    <div className='Feed-main-Container container d-flex '>
      <h1></h1>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Articles /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Articles /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Articles /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Articles/></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Articles /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Articles /></Link>
      

    
    </div>

    </>
  )
}

export default Feed
