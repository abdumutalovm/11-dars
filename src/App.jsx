import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import Header from './components/Header'
import CardsWrapper from './components/CardsWrapper'

function App() {
  return (
    <div className='flex w-full max-w-screen-2xl h-screen	mx-auto'>
      <div>
        <LeftSideBar></LeftSideBar>
      </div>
      <div >
        <div className='bg-[#F2F2F2]'>
          <Header></Header>
          <div className='p-5'>
            <CardsWrapper></CardsWrapper>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App