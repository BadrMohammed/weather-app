import React from 'react';
import { local } from '../../../lang/local';
import './Chart.scss';

const margin = { top: 0, right: 0, bottom: 0, left: 0 },
  width = 960 - margin.left - margin.right,
  height = 380 - margin.top - margin.bottom,
  color = 'rgb(0, 127, 255)';

export const LineChart = ({ d3,data }) => {
  const [activeIndex, setActiveIndex] = React.useState(null)
  // [data, setData] = React.useState([]);

  // React.useEffect(() => {
  //   d3.csv(
  //     'https://raw.githubusercontent.com/jukuznets/datasets/main/usd-2020.csv'
  //   ).then((d) => {
  //     d = d.reverse();
  //     const parsemonth = d3.timeParse('%m/%d/%Y');
  //     d.forEach((i) => {
  //       i.month = parsemonth(i.month);
  //       i.average = Number(i.average);
  //     });
  //     debugger
  //     setData(d);
  //   });
  //   return () => undefined;
  // }, []);

  const yMinValue = d3.min(data, (d) => d.average),
    yMaxValue = d3.max(data, (d) => d.average);

  const getX = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.month))
    .range([0, width]);

  const getY = d3
    .scaleLinear()
    .domain([yMinValue - 1, yMaxValue + 2])
    .range([height, 0]);

  const getXAxis = (ref) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis.tickFormat(d3.timeFormat('%b')));
  };

  const getYAxis = (ref) => {
    const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
    d3.select(ref).call(yAxis);
  };

  const linePath = d3
    .line()
    .x((d) => getX(d.month))
    .y((d) => getY(d.average))
    .curve(d3.curveMonotoneX)(data);

  const areaPath = d3
    .area()
    .x((d) => getX(d.month))
    .y0((d) => getY(d.average))
    .y1(() => getY(yMinValue - 1))
    .curve(d3.curveMonotoneX)(data);

  const handleMouseMove = (e) => {
    const bisect = d3.bisector((d) => d.month).left,
      x0 = getX.invert(d3.pointer(e, this)[0]),
      index = bisect(data, x0, 1);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className='line-chart-d3-container fullWH'>
      <svg
        viewBox={`0 0 ${width + margin.left + margin.right} 
                              ${height + margin.top + margin.bottom}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <g className='axis' ref={getYAxis} />
        <g
          className='axis xAxis'
          ref={getXAxis}
          transform={`translate(0,${height})`}
        />
        <path fill={color} d={areaPath} opacity={0.3} />
        <path strokeWidth={3} fill='none' stroke={color} d={linePath} />

        <text
          transform={'rotate(-90)'}
          x={0 - height / 2}
          y={0 - margin.left}
          dy='1em'
        >
          {local.avg}
        </text>
        <text x={width / 2} y={0 - margin.top / 2} textAnchor='middle'>
          {local.climateAverages}
        </text>

        {data.map((item, index) => {
          return (
            <g key={index}>
              <text
                fill='#666'
                x={getX(item.month)}
                y={getY(item.average) - 20}
                textAnchor='middle'
              >
                {index === activeIndex ? item.average : ''}
              </text>
              <circle
                cx={getX(item.month)}
                cy={getY(item.average)}
                r={index === activeIndex ? 6 : 4}
                fill={color}
                strokeWidth={index === activeIndex ? 2 : 0}
                stroke='#fff'
                style={{ transition: 'ease-out .1s' }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
