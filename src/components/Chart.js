import _ from 'lodash';
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data => {
  return _.round(_.sum(data) / data.length);
};

const Chart = props => {
  return (
    <div>
      <Sparklines width={180} height={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div display="block">
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};

export default Chart;
