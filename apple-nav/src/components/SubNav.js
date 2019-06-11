import React from 'react';

const SubNav = props => {
  if(!props.subNavList[props.match.params.subNavName]) {
    return <div></div>
  }
  return(
    <ul className="sub-nav">
      {props.subNavList[props.match.params.subNavName].map( (subnav, i) => {
        return <li key={i}>{subnav}</li>
      })}
    </ul>
  )
}

export default SubNav;