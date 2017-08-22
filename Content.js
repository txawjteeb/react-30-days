import React from 'react'

import ActivityItem from './ActivityItem';

class Content extends React.Component {
  render() {
    // these lines do the same thing
    // const activity = this.props.activity;
    // const {activity} = this.props; 
    const {activities} = this.props; // ES6 destructuring
    
    return (
      <div className="content">
        <div className="line"></div>

        {/* Timeline item */}
        {activities.map((activity) => (
          <ActivityItem
            activity={activity} />
        ))}
        
      </div>
    )
  }
}

export default Content