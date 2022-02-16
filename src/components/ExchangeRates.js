import React from 'react'
import { useQuery } from '@apollo/client';
import { EXCHANGE_RATES } from '../graphql/query'

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loadng...</p>
    if (error) return <p>Error: </p>

    return data.rates.map(({ currency, rate, name }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>  
            <h3>{name}</h3>
        </div>
     ));
        
}

export default ExchangeRates
