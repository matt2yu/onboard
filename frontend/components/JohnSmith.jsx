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
            <a href={user.profile.website_url}>
                <Logo />
            </a>
          </div>
          <div className='pic'>
            <img className='img' src={window.propic} alt="johnsmithdude" width='50' height='50' />
          </div>

          <div className='profile'>
            <div className='greeting'>Hey I'm {user.first_name} {user.last_name}</div>
            <br/>
            <div className='bio'>{user.profile.bio}</div>
          </div>

          <div className='social-medias'>
            <a href={user.profile.twitter_url}>
              <Twitter />
            </a>

            <a href={user.profile.instagram_url}>
              <Instagram />
            </a>
            

            <a href={user.profile.linkedin_url}>
              <LinkedIn />
            </a>
          </div>

          <div className='powerby'>
            <a href={user.profile.website_url}>
              <PowerBy />
            </a>
          </div>

          </div>
        )
    }

}

export default JohnSmith

