import { useEffect, useState } from 'react';
import { LineChart } from './LineChart';
import './Chart.scss';
export const Chart = ({data}) => {
  const [d3, setD3] = useState(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v6.min.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
    script.addEventListener('load', () => {
      setD3(window.d3);
    });
  }, []);
  return d3 && data ? <LineChart d3={d3} data={data} /> : null;
};
