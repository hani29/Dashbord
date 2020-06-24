import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import all_image from './Images/logo.jpg'
import moment from 'moment'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    panel1:{
        marginBottom: 16,
        width: '100%',
        padding: 15
    },
   panel2:{
    color: ' #2370B6'
   },
   panel3:{
    backgroundColor: '#ddd',
    boarderRadius: 20,
    position: 'relative',
    margin: '5px 30px 5px 30px'
   },
   panel4:{
    width: '130px',
    height: '130px'
   },
   panel5:{
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
   },
   panel6:{
    marginBotttom: 15,
    color: '#84888d',
    fontWeight:600
   },
   panel7:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
   },
   panel8:{
    height: '10px',
    width: '10px',
    backgroundColor: 'red',
    border: '3px solid #BADA55',
    borderRadius: '50%',
    display: 'inline-block',
    margin: 15
   },
   panel9:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center' 
   },
   panel10:{
    height: '25px',
    width: '25px',
    backgroundColor: 'green',
    borderRadius: '50%', 
    display: 'inline-block', 
    textAlign: 'center',
    color:'#fff'
   },
   panel11:{
    color: ' green',
    marginLeft:5,
    fontWeight:800, 
    fontSize:18,
    marginTop: 3 
   },
   date:{
    marginLeft: 'auto',
    marginTop: 15,
    fontWeight:800,
    fontSize:18 ,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
   }
   
});

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected || 0
        }
    }
    handleChange = (index) => {
        this.setState({ selected: index })
    }
    render() {
       let logo =this.props.children.map((elem, index) => elem.props.data)
       logo.map((elem,index)=>elem.sports_name)
        return (
            <div>
                <Paper className="sticky">
                    <div className="main">
                        <div className="image-container">
                            <ul className="inline">
                                {this.props.children.map((elem, index) => {
                                    let style = index === this.state.selected ? 'selected' : '';
                                    return <li className={style} key={index} onClick={this.handleChange.bind(this, index)}>
                                        <Grid  container
                                        direction="column"
                                        justify="center"
                                        alignItems="center">
                                            <Grid item md={8} >
                                            <img src={elem.props.logo} alt="logo not found" style={{width: 30,height:30}}/>

                                            </Grid>
                                            <Grid item md={12} style={{fontSize: 20, fontStyle: 'bold'}}>
                                            {elem.props.title}

                                            </Grid>

                                        </Grid>
                                        </li>
                                })}
                            </ul>
                        </div>

                    </div>

                </Paper>
                <div className="tab">{this.props.children[this.state.selected]}</div>
            </div>
        )
    }

}


export class Panel extends Component {

    griddata = (item, index, title,classes) => {
        return (
            <Paper className={classes.panel1}>
                {item.sports_unselected_img_url === undefined ? <Grid container direction="column" justify="left" alignItems="left">
                    <Grid item md={1}>
                        <Typography variant="body1" className={classes.panel2} >
                            picks
                        </Typography>
                    </Grid>
                    <Grid item md={12} className={classes.panel3}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item md={12}>
                                {title === 'All' && item.match_parties &&
                                    <Grid container direction="row" justify="space-between" alignItems="left">
                                        {item.match_parties.map((items, index) =>
                                            <div style={{ margin: 20 }} >
                                                <div>
                                                    {index === 0 &&
                                                        <img src={items.party_img_url} alt="logo not found" className={classes.panel4} />}
                                                </div>
                                                <div style={{ marginLeft: 'auto' }}>
                                                    {index === 1 &&
                                                        <img src={items.party_img_url} alt="logo not found" className={classes.panel4}  />}
                                                </div>
                                            </div>
                                        )}
                                    </Grid>}
                                    </Grid>
                            <Grid item md={4} className={classes.panel5} >
                                <Typography variant="h6" className={classes.panel6} >
                                    {item.challenge_name}
                                </Typography>
                                <div className={classes.panel7} >
                                    <Typography variant="h5" style={{ color: ' #7a7b7c' }}>
                                        {item.desc}
                                    </Typography>
                                    <Typography variant="h5" className={classes.panel8} >
                                    </Typography>
                                    <Typography variant="h5" style={{ color: ' #7a7b7c' }}>
                                    Live Score Updates
                                </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <div className={classes.panel9}>
                            <div className={classes.panel7}>
                                <Typography className={classes.panel10}>
                                    ₹ </Typography>
                                <Typography className={classes.panel11}>
                                    {item.prize_money}
                                </Typography>
                            </div>
                            <div className={classes.date}>
                                <Typography style={{ color: '#999999 '}}>
                                    <AccessTimeIcon/>
                                </Typography>
                                <Typography style={{ color: '#999999 ',marginLeft: 5 ,marginTop: -5 }}>
                                    {moment(item.start_time).format("LLL")}
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                    :
                    null
                }
            </Paper>
        )
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.props.data.challenges.map((item, index) => {

                    if (this.props.title === item.sports_name) {
                        return this.griddata(item, index, this.props.title,classes)


                    }
                     else if (this.props.title === "All") {
                        return this.griddata(item, index, this.props.title,classes)
                    }

                })}
            </div>

        )

    }
}

class tabSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.merge })
    }
    componentDidMount = () => {
        if (this.props.merge !== '') {
            this.setState({ data: this.props.merge })
        }
    }
    getdata(data) {
        let data2 = []
        if (data === '') return ''; data.map((item, index) => {
            let newitem = item
            if (newitem.sports_name === undefined && newitem.sports_img_url === undefined) { 
                newitem.sports_name = "All" 
                newitem.sports_img_url = all_image } data2.push(newitem)
        })
        const uniqueAddresses = Array.from(new Set(data2.map(a => a.sports_name))).map(id => { return data2.find(a => a.sports_name === id) })
        return uniqueAddresses
    }

    render() {
        const data = this.getdata(this.state.data)
        return (
            <div style={{ position: 'relative' }} >
                <Tabs selected={0} {...this.props}>
                    {Object.values(data).map((item, index) => {
                        return <Panel title={item.sports_name} logo={item.sports_img_url} paneldata={item} {...this.props} key={index}></Panel>
                    })}
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        currenttab: state.currenttab,
        merge: state.merge
    }
}
tabSession.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(tabSession));