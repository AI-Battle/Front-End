import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './ExpansionPanel.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    width: '100%'
  },
  panelSummary: {
    backgroundColor: 'rgb(47, 9, 78)',
    color: 'white'
  },
  panelDetail: {
    backgroundColor: 'rgba(71, 55, 103, 0.9)'
  }
}));

function SimpleExpansionPanel({ id, teamName, score, ranking, win, lost, equals, winPercentage }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.panelSummary}
        >
          <Typography className={classes.heading}>
            <div className='score-panel-title__team-name'>
              <ExpandMoreIcon />
              {teamName}
            </div>
            <div className='score-panel-title__team-statistics'>
              <span>{ranking}</span>
              <span>{score}</span>
              <span>{winPercentage}</span>
              <span>{win}</span>
              <span>{equals}</span>
              <span>{lost}</span>
            </div>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.panelDetail}>
          <Typography className='d-flex flex-column text-light mr-5'>
            <span>عضو اول</span>
            <span>عضو دوم</span>
            <span>عضو سوم</span>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Teams: state.Teams
  }
}

export default connect(mapStateToProps)(SimpleExpansionPanel);