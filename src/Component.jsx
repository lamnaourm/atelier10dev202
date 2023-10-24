import React, { Component } from 'react'
import Chargement from './Chargement'

export default class Composant extends Component {

    state = {
        loading: true,
    }

    render() {
        if (this.state.loading)
            return <Chargement />
        else 
            return (
                <div>
                    <h1>Chargement terminé du composant ....</h1>
                </div>
            )
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 4000)
    }
}

