import { Row, Card, Col, Input } from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/CryptoAPI';
import Loader from './Loader';


const Cryptocurrencies = ({simplified}) => {
  const count=simplified ? 10 : 100;
  const {data:cryptoList,isFetching}=useGetCryptosQuery(count);
  console.log(cryptoList);
  const [cryptos,setCryptos]=useState();

  const [searchItem,setSearchTerm]=useState("");

  useEffect(()=>{
    const filterdData=cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchItem.toLowerCase()));
    setCryptos(filterdData);

  },[cryptoList,searchItem])

  if(isFetching) return <Loader/>

  return (
    <>
      {!simplified &&( 
        <div className="search-crypto">
          <Input placeholder='Search Crypto Currency' onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
      )}
      <Row gutter={[32,32]} className='crypto-card-container'>
        {cryptos?.map((currency)=>(
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.rank}>
              <Link to={`/cryptoDetail/${currency.name}/${currency.uuid}`}>
                <Card 
                  title={`${currency.rank}. ${currency.name}`} 
                  extra={<img  src={currency.iconUrl} className='crypto-image'/>}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
