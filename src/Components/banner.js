import React, { Component } from 'react'
import Slider from "react-slick"
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Wallet from './wallet'
import Contest from './contest'
import TabSession from './tabSession'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
 
});
class banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data.banners })
  }
  render() {
    const { data } = this.state;


    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" children={<Home data={data} />} />
            <Route path="/wallet" children={<Wallet />} />
            <Route path="/contest" children={<Contest />} />
          </Switch>
        </Router>
      </div>

    )
  }
}
class Home extends Component {
  render() {
    const { data } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      swipe: true,
      autoplaySpeed: 5,
      pauseOnHover: true,
      arrows: false,
      // responsive: [
      //   {
      //     breakpoint: 320,
      //     settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
      //   },
      //   {
      //     breakpoint: 1024,
      //     settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
      //   }
      // ]
      responsive: [{ breakpoint: 980, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
    };
  
  
    return (
      <div >
        <div style={{ marginBottom: 60 }}>
          <AppBar position="fixed" style={{ backgroundColor: '#40B2E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Toolbar >
              <Link to="/"> <Typography variant="h6" style={{ textAlign: 'center', maginBottom: 20, color: '#fff' }}>HOME</Typography></Link>
            </Toolbar>
          </AppBar>
        </div>
        <div className="silder_set"  >
          <Slider {...settings}>
            {Object.values(data).map((item, index) => {
              return <div >
                {item.redirect === true ?
                  <div  >
                    <Link to={item.route}>
                      <div style={{padding: 20 }}>
                        <img src={item.img_url} alt={item.img_url} style={{ width: '100%' }} />
                      </div>
                    </Link>
                   </div>
                  :
                  <div >
                  <Link to="/">
                  <div style={{padding: 20 }}>
                     <img src={item.img_url} alt="Banners" style={{width: '100%'  }}/>
                     </div>
                     </Link>
                     </div> }
              </div>
            }
            )}
          </Slider>
        </div>
        <div >
          <TabSession />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(banner));
