import React from 'react';

class Friend extends React.Component {
    render() {
        const picUrl='http://i.imgur.com/vZFi0gc.png'
        return (
            <li className='friend'>
                <img className="profile-pic" src={ picUrl } />

                <h3>{this.props.name}</h3>

                <div className="location">
                    Location: { this.props.currentLocation.city }, { this.props.currentLocation.state }, { this.props.currentLocation.country }
                </div>

                <div className="status">
                    { this.props.status}
                </div>

                <div className="num-friends">
                    { this.props.friendCount}
                </div>
            </li>
        );
    }
}
export default Friend;