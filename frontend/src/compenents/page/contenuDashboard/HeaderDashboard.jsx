import React from 'react'
import HeaderSidebar from '../HeaderSidebar';

function HeaderDashboard() {
    const title = 'Bienvenue sur RED Product';
    const description = 'Lorem ipsum dolor sit amet consectetur';

  return (
    <HeaderSidebar title={title} description={description} />
  )
}

export default HeaderDashboard
