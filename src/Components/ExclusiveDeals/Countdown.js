import React from 'react'
import ExclusiveDeals from './ExclusiveDeals';

const CountDown = () => {
    
    const targetDate = new Date('July 19, 2024 00:00:00');
  return (
    <>


    <div>
      <ExclusiveDeals targetDate={targetDate} />
    </div>

      
    </>
  )
}

export default CountDown
