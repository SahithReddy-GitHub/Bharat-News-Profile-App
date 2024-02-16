import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import ProfileContext from './context/ProfileContext'
import UserProfile from './components/UserProfile'
import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import History from './components/History'
import Settings from './components/Settings'

class App extends Component {
  state = {activeTab: 'POSTS'}

  changeTab = tabId => {
    this.setState({activeTab: tabId})
  }

  render() {
    const {activeTab} = this.state

    return (
      <ProfileContext.Provider
        value={{
          activeTab,
          changeTab: this.changeTab,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/profile/bookmarks" component={Bookmarks} />
            <Route exact path="/profile/history" component={History} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </BrowserRouter>
      </ProfileContext.Provider>
    )
  }
}

export default App
