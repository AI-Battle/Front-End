import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import '../ScorePanel/Scores.styles.scss'
import './PopupScores.styles.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const SpringModal = ({team}) => {
  const [position, setPosition] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
      setPosition(currPos.y);
  })
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='popup-window' style={{width: '100%'}}>
      <div onClick={handleOpen} style={{color: 'white', width: '100%'}}>
        <div className='scores'>
            <div className='score-panel-title__team-name' style={{marginRight: '9rem'}}>
                {team.teamName}
            </div>
            <div className='score-panel-title__team-statistics'>
                <span>{team.ranking}</span>
                <span>{team.score}</span>
                <span>{team.winPercentage}</span>
                <span>{team.win}</span>
                <span>{team.equals}</span>
                <span>{team.lost}</span>
            </div>
        </div>
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            className={classes.paper} 
            style={{
              backgroundColor: 'rgba(71, 55, 103, 1)',
              color: 'white',
              borderRadius: '1rem',
              width: '57rem',
              height: '35rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{
              marginTop: '2rem',
              marginLeft: '2rem'
            }}>
              <h1 id="spring-modal-title font-weight-light">{team.teamName}</h1>
            </div>
            <ul 
                dir='ltr' 
                className='mt-5' 
                style={{
                    fontSize: '1.3rem',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center' 
                }}
                >
              <li>رتبه : {team.ranking}</li>
              <li>امتیاز: {team.score}</li>
              <li>درصد برد : {team.winPercentage}</li>
              <li>برد : {team.win}</li>
              <li>مساوی : {team.equals}</li>
              <li>باخت : {team.lost}</li>
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SpringModal