import React, { Component } from 'react'
import Banner from './Components/banner'
import axios from 'axios'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      merge: '',
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/home`, { headers: { 'Content-Type': 'application/json' } }).then(res => {
      let challenges = res.data.challenges;
      let sports = res.data.sports;
      const merged = [...challenges, ...sports]
      this.setState({ data: merged })
      this.props.dispatch({ type: 'DATA', data: res.data });
      this.props.dispatch({ type: 'Merged', merge: merged });
      let data = res.data;
      this.setState({ data })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div >
        <Banner />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    merge: state.merge
  }
}
export default connect(mapStateToProps)(App);
