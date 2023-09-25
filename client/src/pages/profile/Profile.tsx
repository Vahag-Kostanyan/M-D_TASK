import React from 'react'
import ProfileModule from '../../Modules/profile/ProfileModule'
import { useNavigate, useNavigation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from './query';

function Profile() {
  
  return (
    <div>
        <h1></h1>
        <ProfileModule/>
    </div>
  )
}

export default Profile