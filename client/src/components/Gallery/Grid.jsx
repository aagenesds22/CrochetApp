import React, {useState, useEffect } from 'react'
import {MainGrid} from '../../StyledComponents/index.js'
import {
    useQuery,
    gql,
    
} from '@apollo/client';
import GridItem from './GridItem';


const PRODUCTS = gql`
    query allProducts {
        getProducts {
            _id,
            name,
            description
            currency,
            price
        }
    }
`



function Grid(props) {

    const {data, loading, error} = useQuery(PRODUCTS);
    const [orientation, setOrientation] = useState('vertical');

    if(data) {

        return (
            <MainGrid>
                {data.getProducts.map(({_id, name, description }) => (
                    <GridItem _id={_id} name={name} description={description} />
                ))}
            </MainGrid>
        )

    } else {

        return <h3>{loading ? 'Loading' : 'Error'} </h3>

    }
}

export default Grid;