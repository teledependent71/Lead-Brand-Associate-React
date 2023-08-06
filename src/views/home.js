import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Brand Associate</title>
        <meta property="og:title" content="Lead Brand Associate" />
      </Helmet>
    </div>
  )
}

export default Home
