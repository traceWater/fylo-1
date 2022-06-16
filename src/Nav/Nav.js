import React from 'react';
import './Nav.scss';

function renderSortByItems(props) {
  return props.propsDiv.items.map((item, i) => {
    let navClass = 'navigation-'+i;
    return <a href={item.link} className={navClass} key={i}>{item.name}</a>;
  });
}

export function Nav(props) {
  console.log(props);
  return (
    <div className="header">
      <img src={props.propsDiv.imgSrc} alt="" />
      <div className="navigation">
        {renderSortByItems(props)}
      </div>
    </div>
  );

}
