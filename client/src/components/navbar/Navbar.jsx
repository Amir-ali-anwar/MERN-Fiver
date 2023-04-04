import React, { useEffect, useState } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.screenY > 0 ? setActive(true) : setActive(fasle);
  }
  useEffect(() => {
    window.addEventListener('scroll', isActive)
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [active])
  const currentUser = {
    id: 1,
    username: 'Amir Ali Anwar',
    isSeller: true
  }
  return (
    <div className={`${active ? "navbar active" : "navbar"}`}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in </span>
          {!currentUser?.isSeller && <span>Become a Seller </span>}
          {!currentUser && <button>Join</button>}
          {
           currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="" alt="" />
              <span>{currentUser?.username}</span>
              <div className="options">
                {
                 currentUser?.isSeller  && (
                  <>
                  <span>Gigs</span>
                  <span>Add</span>
                  </>
                 ) }
                 <span>Orders</span>
                 <span>Messages</span>
                 <span>Logout</span>
              </div>
             </div> 
           ) 
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
