import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { requestUser } from '../actions/user_actions'

function JohnSmith() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    // const state = useSelector(state => state)

    useEffect( () => {
        dispatch(requestUser(5)) // only need John Smith, userId = 5
        .then(() => setLoading(false))
    }, [])

    
    if (loading) {
      return <div className="loader"></div>
    } else {     
      console.log('hello')
      return (
          <div className="john-smith">
            stuck
          </div>
        )
    }

}

export default JohnSmith

