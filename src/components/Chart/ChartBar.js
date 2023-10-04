import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  // calcular cuanto sera la altura
  // se modificara el css desde el componente
  let barFillHeight = '0%';
  // se pone +'%' para convertir en string y concatenar con ese texto
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
