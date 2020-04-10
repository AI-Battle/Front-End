import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import './PopupWindow.styles.css'

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

const SpringModal = ({person}) => {
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
    <div className='popup-window'>
      <div onClick={handleOpen} style={{color: 'white'}}>
        <div className={`image-cropper image-container ${position < -1100 && 'zoomIn'}`}>
          <img src={person.imgSrc} alt='person' className='image' width='100px' />
        </div>
        <div>
          <p className="text-light mt-2">{person.name}</p>
          <p className='text-warning' style={{fontSize: '.9rem', marginTop: '-.5rem'}}>{person.role}</p>
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
              borderBottom: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '2rem'
            }}>
              <h1 id="spring-modal-title font-weight-light">{person.name}</h1>
              <h2 id="spring-modal-title font-weight-light">{person.latinName}</h2>
            </div>
            <div className='mt-4 font-weight-bold'>
              <h4 id="spring-modal-description">{person.job}</h4>
            </div>
            <ul dir='ltr' className='mt-5' style={{fontSize: '1.3rem'}}>
              <li><a className='text-warning' href={person.linkedInAccount} style={{textDecoration: 'none'}}>LinkedIn Account</a></li>
              <li><a className='text-warning' href={person.githubAccount} style={{textDecoration: 'none'}}>Github Account</a></li>
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default SpringModal