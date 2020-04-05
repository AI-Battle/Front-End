import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'rsuite';

const { Circle } = Progress;

const style = {
  width: 120,
  display: 'inline-block',
  
};

function CircleStatistics({ GameStatistics }) {
    return (
        <div>
            <div style={style}>
                <Circle percent={GameStatistics.percentage} strokeColor="#ffc107" />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        GameStatistics: state.GameStatistics
    }
}
  
export default connect(mapStateToProps)(CircleStatistics);