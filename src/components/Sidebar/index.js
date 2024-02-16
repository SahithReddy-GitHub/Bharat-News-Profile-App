import {AiFillHome} from 'react-icons/ai'
import {IoMdSettings} from 'react-icons/io'

import {
  SidebarCon,
  RowCon,
  SidebarPara,
  SidebarHead,
  SidebarCard,
  RowConBottom,
  DivCard,
  Img,
  MainHead,
  SidebarHeadLight,
} from './styledComponents'

const Sidebar = () => (
  <SidebarCon>
    <DivCard>
      <MainHead>The Bharat News</MainHead>
      <RowCon to="/">
        <AiFillHome color="white" />
        <SidebarPara>Home</SidebarPara>
      </RowCon>
      <RowCon to="/settings">
        <IoMdSettings color="white" />
        <SidebarPara>Settings</SidebarPara>
      </RowCon>
    </DivCard>
    <SidebarCard>
      <SidebarHead>CONTACT US</SidebarHead>
      <RowConBottom>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </RowConBottom>
      <SidebarHeadLight>
        Enjoy! Now to see your channels and recommendations!
      </SidebarHeadLight>
    </SidebarCard>
  </SidebarCon>
)

export default Sidebar
