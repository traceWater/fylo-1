import React from 'react';
import './DivAttrSingle.scss';

export function DivAttrSingle(props) {
  console.log('DivAttrSingle/DivQuotesSingle: ',props);
  return (
    <div className={props.propsDivSingle.name}>
      <img src={props.propsDivSingle.imgSrc} alt="" />
      <div className="h1">
        {props.propsDivSingle.h1Txt}
      </div>
      <div className="p">
        {props.propsDivSingle.pTxt}
      </div>
      <div className="block">
        <img src={props.propsDivSingle.imgSrcSm} alt="" />
        <div className="blockInner">
          <div className="h1Sm">
            {props.propsDivSingle.h1Sm}
          </div>
          <div className="h2Sm">
            {props.propsDivSingle.h2Sm}
          </div>
        </div>
      </div>
    </div>
  );
}
