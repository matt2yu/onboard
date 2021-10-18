import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestUser } from '../actions/user_actions';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, LinkedIn, Logo, PowerBy } from '../svgs/svgs';



function JohnSmith() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {
      dispatch(requestUser(5)) // only need John Smith, userId = 5
      .then( () => setLoading(false))
    }, [])


    
    const user = useSelector(state => state);

    if (loading) {
      return <div className="loader"></div>
    } else {    
      console.log(user.profile.twitter_url)
      return (
          <div className="entire-page">

          <div className='title'>
          <Link to={`/${user.profile.website_url}`}>
              <Logo />
          </Link>
          </div>

          <div className='profile'>
            <img src={window.propic} alt="johnsmithdude" width='50' height='50' />
            <div className='greeting'>Hey I'm {user.first_name} {user.last_name}</div>
            <div className='bio'>{user.profile.bio}</div>
          </div>

          <div className='social-medias'>
            <Link className="twitter" to={`/${user.profile.twitter_url}`}>
              <Twitter />
            </Link>

            <Link className="instagram" to={`/${user.profile.instagram_url}`}>
              <Instagram />
            </Link>

            <Link className="linkedin" to={`/${user.profile.linkedin_url}`}>
              <LinkedIn />
            </Link>
          </div>

          <div className='powerby'>
            <Link to={`/${user.profile.website_url}`}>
              <PowerBy />
            </Link>
          </div>


          </div>
        )
    }

}

export default JohnSmith

