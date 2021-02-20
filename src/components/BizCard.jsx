import React from 'react'
import styled from 'styled-components'

const BizCard = ({biz, number})=>{
    // Name
    // Address
    // Image
    // Star Rating
    // Review Count
    // Link
   const renderAddress =()=>{
       return biz.location.display_address.map(addy=>{
           return <div>{addy}</div>
       })
   }
    return(
        <Card>
            <a href={biz.url} target="_blank" rel="noreferrer">
                <h3>{number}: {biz.name}</h3>
                <div>{renderAddress()}</div>
                <Image src={biz.image_url ||"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Feature_parking.svg/800px-Feature_parking.svg.png"} alt={biz.name}/>
                <div>Rating: {biz.rating}</div>
                <div>Number of Reviews: {biz.review_count}</div>
                <div>Score: {(biz.review_count * biz.rating ) / (biz.review_count + 1)}</div>
            </a>
        </Card>
    )
}

export default BizCard

const Card = styled.div`
height: 450px;
width: 300px;
margin: 20px;
padding: 5px;
border: 1px solid black;
box-shadow: 2px 2px 10px black;
border-radius: 15px;
`

const Image = styled.img`
width: 200px;
height: auto;
max-height: 250px;
`