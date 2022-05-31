import Chart from 'react-apexcharts';
export const AreaChart = ({ data }) => {
  const { series, axis } = data;
  const options = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: axis,
    tooltip: {
      x: {
        format: 'MM/dd/yyyy HH:mm',
      },
    },
  };

  return series ? (
    <Chart
      options={options}
      series={series}
      type='area'
      width='100%'
      height='100%'
    />
  ) : null;
};
