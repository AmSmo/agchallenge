import React from 'react'
import BizCard from './BizCard'
import styled from 'styled-components'

const Businesses = ({ businesses }) => {
    const sortedBiz = businesses.sort((a, b) => {
        return ((a.review_count * a.rating) / (a.review_count + 1)) -
            ((b.review_count * b.rating) / (b.review_count + 1))

    })
    const renderBusinesses = () => {
        return sortedBiz.map((biz, idx) => {
            return <BizCard biz={biz} key={idx} number={idx + 1} />
        })
    }


    return (
        <div>
            <h2>Businesses:</h2>
            <BizWrapper>
                {renderBusinesses()}
            </BizWrapper>
        </div>
    )
}

export default Businesses

const BizWrapper = styled.div`
display: flexbox;
justify-content: space-around;
flex-wrap: wrap;
`