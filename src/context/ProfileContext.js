import React from 'react'

const ProfileContext = React.createContext({
  activeTab: 'POSTS',
  changeTab: {},
})

export default ProfileContext
