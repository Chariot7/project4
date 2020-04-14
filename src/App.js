import React from 'react';
import './App.css';
import {Route, NavLink, withRouter} from 'react-router-dom';
import * as artworkAPI from './services/artworks-api'
import SignupForm from './components/SignupForm/SignupForm';
import userService from './utils/userService'
// import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LoginPage from './pages/LoginPage/LoginPage'
import ArtworkListPage from './pages/ArtworkListPage/ArtworkListPage'
import AddArtworkPage from './pages/AddArtworkPage/AddArtworkPage'
import ArtworkDetailsPage from './pages/ArtworkDetailsPage/ArtworkDetailsPage'
import EditArtworkPage from './pages/EditArtworkPage/EditArtworkPage'

class App extends React.Component {
  state = {
    user: userService.getUser(),
    artworks: []
  }

  handleAddArtwork = async newArtData => {
    console.log('addArt function')
    const newArt = await artworkAPI.create(newArtData);
    // console.log(newArt)
    // console.log(newArtData)
    console.log(this.props)
    this.setState(state => ({
      artworks: [...state.artworks, newArt]
    }),
    () => this.props.history.push('/artworks'));
  }

  handleUpdateArtwork = async updatedArtData => {
    const updatedArtwork = await artworkAPI.update(updatedArtData);
    const newArtworksArray = this.state.artworks.map(a => 
      a._id === updatedArtwork._id ? updatedArtwork : a 
      );
      this.setState(
        {artworks: newArtworksArray},
        () => this.props.history.push('/artworks')
      )
  }
  
  handleDeleteArtwork= async id => {
    await artworkAPI.deleteOne(id);
    this.setState(state => ({
      artworks: state.artworks.filter(a => a._id !==id)
    }), () => this.props.history.push('/artworks'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  async componentDidMount() {
    const artworks = await artworkAPI.getAll();
    this.setState({artworks});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          ArtBase
          <nav>
            <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/artworks'>ARTWORKS</NavLink>
            &nbsp;&nbsp;&nbsp;
            {/* <NavLink exact to='/signup'>SIGN UP</NavLink> */}
          </nav>
        </header>
        <main>
        <Route exact path='/signup' render={() => 
          <SignupForm
           handleSignupOrLogin={this.handleSignupOrLogin} 
           />
        } />
        <Route exact path='/login' render={() => 
          <LoginPage
          handleSignupOrLogin={this.handleSignupOrLogin}
          />
        } />
        <Route exact path='/artworks' render={() => 
            <ArtworkListPage
              artworks={this.state.artworks}
              handleDeleteArtwork={this.handleDeleteArtwork}
            />
          } />
           <Route exact path='/add' render={() => 
            <AddArtworkPage
              handleAddArtwork={this.handleAddArtwork}
            />
          } />
           <Route exact path='/details' render={({location}) => 
            <ArtworkDetailsPage
              location={location}
            />
          } />
           <Route exact path='/edit' render={({location}) => 
            <EditArtworkPage
              handleUpdateArtwork={this.handleUpdateArtwork}
              location={location}
            />
          } />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
