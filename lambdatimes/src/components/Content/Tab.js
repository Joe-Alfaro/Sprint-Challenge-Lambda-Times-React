import React from 'react';

import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={
        props.selectedTab===props.tab ? 'tab active-tab' : 'tab'}
      onClick={event => {
        event.preventDefault();
        props.selectTabHandler(props.tab);
      }}
    >
     {props.tab.toUpperCase()} 
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};
// Make sure you include PropTypes on your props.

export default Tab;
