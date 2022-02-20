import React from 'react'
import ExpenseList from '../../components/ExpenseList/ExpenseList'
import TopFold from '../../components/TopFold/TopFold'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <TopFold/>
      <ExpenseList />
    </div>
  )
}

export default Home