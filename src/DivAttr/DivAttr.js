import React from 'react';
import './DivAttr.scss';
import {DivAttrSingle} from '../DivAttrSingle/DivAttrSingle';

export function DivAttr(props) {
  console.log('DivAttr: ',props);
  return (
    <div className={props.propsDiv.name}>
      <div className="divAttrPic">
        <img src={props.propsDiv.imgSrc} alt="" />
      </div>
      <div className="divAttrSingleBody" id={props.propsDiv.nav}>
        <DivAttrSingle propsDivSingle={props.propsDivSingle[0]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[1]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[2]} />
        <DivAttrSingle propsDivSingle={props.propsDivSingle[3]} />
      </div>
    </div>
  );

}
