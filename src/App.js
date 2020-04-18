import React from 'react';
import './App.css';
import {Route, NavLink, withRouter} from 'react-router-dom';
import * as artworkAPI from './services/artworks-api'
import * as artistAPI from './services/artists-api'
import * as wallAPI from './services/walls-api'
// import * as artistAPI from './services/artists-api'
import SignupForm from './components/SignupForm/SignupForm';
import userService from './utils/userService'
// import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import LoginPage from './pages/LoginPage/LoginPage'
import ArtworkListPage from './pages/ArtworkListPage/ArtworkListPage'
import AddArtworkPage from './pages/AddArtworkPage/AddArtworkPage'
import ArtworkDetailsPage from './pages/ArtworkDetailsPage/ArtworkDetailsPage'
import EditArtworkPage from './pages/EditArtworkPage/EditArtworkPage'
import WallPage from './pages/WallPage/WallPage'

class App extends React.Component {
  state = {
    user: userService.getUser(),
    artworks: [],
    artists: [],
    walls: [],
  }

  handleAddArtwork = async newArtData => {
    const newArt = await artworkAPI.create(newArtData);
    let artist = newArt.artist
    let artwork = newArt.artwork
    this.setState(state => ({
      artists: [...state.artists, artist],
      artworks: [...state.artworks, artwork],
    }),
    () => this.props.history.push('/add'));
    console.log(this.state, 'this is this.state')
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
  
  handleDeleteArtwork = async id => {
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
    console.log('artworks b')
    const both = await artworkAPI.getAll();
    console.log(both)
    const artists = both.artists
    const artworks = both.artworks
    console.log(artists)
    console.log(artworks)
    this.setState({
      artworks,
      artists
    });
    console.log(this.state.artists, 'this is state')
    console.log(this.state.artworks, 'this is state art')
    // const artists = await artistAPI.getAll();
    // this.setState({artists});
  }
  // async componentDidMount() {
  //   console.log('artists before')
  //   console.log('artists after')
  //   this.setState({artists});
  // }


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
        <main style={{
          // backgroundColor: `rgb(${this.state.background.red},50,50)`
        }}>
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
              // artists={this.state.artists}
              handleDeleteArtwork={this.handleDeleteArtwork}
              />
            } />
           <Route exact path='/add' render={() => 
            <AddArtworkPage
            user={this.state.user}
            handleAddArtwork={this.handleAddArtwork}
            artworks={this.state.artworks}
            artists={this.state.artists}
            />
          } />

           <Route exact path='/wall' render={() => 
            <WallPage
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
