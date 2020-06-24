import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  render() {

    return (
      <div>
        <AppBar position="fixed"  style={{ backgroundColor: '#40B2E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Toolbar>
            <Link to="/"> <Typography variant="h5" style={{ textAlign: 'center', maginBottom: 20, color: '#fff' }}>Contest</Typography></Link>
          </Toolbar>
        </AppBar>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps)(contest);