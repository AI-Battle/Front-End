import React, { Component } from 'react'
import { connect } from 'react-redux'

// import STAFF from '../../json/staff'
// import CATEGORY_TYPE from '../../json/staffCategory'

import StaffNavigator from '../../components/StaffNavigator/StaffNavigator.component'
import StaffNames from '../../components/StaffNames/StaffNames.component'
import './StaffList.styles.css'

class StaffList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staff: [],
            categoryType: [],
            activeCategoryType: null
        }
    }

    componentDidMount() {
        this.setState({
            staff: this.props.STAFF,
            categoryType: this.props.CATEGORY_TYPE,
            activeCategoryType: this.props.CATEGORY_TYPE[0].id
        })
    }

    handleTabClick = (event) => {
        const id = event.target.id;
        if (!(this.state.activeCategoryType === id)) {
            this.setState({ activeCategoryType: id })
        }
    }


    render() {
        console.log('active catefory type', this.state.activeCategoryType)
        const { staff, categoryType, activeCategoryType } = this.state

        return (
            <div className='staff-list container shadow px-0'>
                <div className='staff-list__tabs' onClick={this.handleTabClick}>
                    {
                        categoryType.map((cat, i) => {
                            // if (i === 0) { this.setState({ activeCategoryType: cat.id }) }
                            if (cat.id === Number(activeCategoryType)) {
                                // console.log('1')
                                return <StaffNavigator key={cat.id} name={cat.name} className='staff-navigator--active' />
                            }
                            else {
                                // console.log(2)
                                return <StaffNavigator key={cat.id} id={cat.id} name={cat.name} />
                            }
                        })
                    }
                </div>

                <div className='staff-list__names py-5'>
                    {/* {console.log(staff.category)} */}
                    {
                        staff.filter(staff => staff.category === activeCategoryType).map(({ id, ...others }) =>
                            <StaffNames key={id} {...others} />
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        STAFF: state.STAFF,
        CATEGORY_TYPE: state.CATEGORY_TYPE
    }
}

export default connect(mapStateToProps)(StaffList)