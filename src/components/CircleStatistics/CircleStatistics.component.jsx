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
            <div className="progress mb-5" dir='ltr'>
                <div class="progress-bar bg-success" role="progressbar" style={{width: `${GameStatistics.winPercentage}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    {GameStatistics.winPercentage}  برد 
                </div>
            </div>
            <div className="progress mb-5" dir='ltr'>
                <div class="progress-bar bg-warning" role="progressbar" style={{width: `${GameStatistics.equalityPercentage}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    {GameStatistics.equalityPercentage}  مساوی 
                </div>
            </div>
            <div className="progress mb-5" dir='ltr'>
                <div class="progress-bar bg-danger" role="progressbar" style={{width: `${GameStatistics.losePercentage}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    {GameStatistics.losePercentage}  باخت 
                </div>
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

// <div>
        //     <div style={style}>
        //         <Circle percent={GameStatistics.percentage} strokeColor="#ffc107" />
        //     </div>
        // </div>