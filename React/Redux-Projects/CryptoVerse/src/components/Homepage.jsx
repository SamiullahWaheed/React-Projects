import { Col, Row, Statistic, Typography } from 'antd'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoAPI';
import {Exchanges, Cryptocurrencies, CryptoDetails, News } from '../components';
import Loader from './Loader';
const {Title} = Typography;

const Homepage = () => {

  const {data, isFetching}=useGetCryptosQuery(10);
  if(isFetching) return <Loader/>

  const globalStats=data?.data?.stats;

  return (
    <>
      <Title level={2} className='heading'> Global Statistics </Title>
      <Row>
        <Col span={8}><Statistic title='Total Cryptocurrencies:' value={globalStats.total}/></Col>
        <Col span={8}><Statistic title='Total Exchanges:' value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={8}><Statistic title='Total Market Cap:' value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={8}><Statistic title='Total Total 24h Volume:' value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={8}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/></Col>
        <Col span={8}><Statistic title='Total Cryptocurrencies' value={globalStats.total}/></Col>
      </Row> 
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={5} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={5} className='show-more'><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>

  )
}

export default Homepage
