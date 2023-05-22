import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/sign-in')
  }, [])
  return (
    <div>HomePage</div>
  )
}

export default HomePage