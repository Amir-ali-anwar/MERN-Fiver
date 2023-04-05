import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/slide'
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      {/* <Slide /> */}
    </div>
  )
}

export default Home
