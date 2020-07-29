import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            goToApp: false
        }
        this.goToApp = this.goToApp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    goToApp(event) {

      event.preventDefault()
      this.setState({
           goToApp: true 
        })
    }
    handleChange(event) {
      const pseudo = event.target.value
      this.setState({ 
          pseudo : pseudo
        })
    }
  
    render () {
      if (this.state.goToApp) {
        return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
      }
  
      return (
        <div className='connexionBox'>
          <form className='connexion' onSubmit={this.goToApp} >
            <h1>Ma Boîte à Recettes</h1>
            <input
              type='text'
              value={this.state.pseudo}
              onChange={this.handleChange}
              placeholder='Nom du Chef'
              pattern='[A-Za-z-]{1,}'
              required />
            <button type='submit'>GO</button>
            <p>Pas de caractères spéciaux.</p>
          </form>
        </div>
      )
    }
  }

  export default Connexion