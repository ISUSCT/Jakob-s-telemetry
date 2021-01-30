import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';
import { Typography, Box, Paper, useTheme, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  chart: {
    height: "450px",
    width: "1000px",
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    alignContent: "left",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
}));

const Batteries = ({ className, ...rest}) => {
    const classes = useStyles();
    const theme = useTheme();

    const graph = {
        datasets: [
            {
                backgroundColor: colors.green[600],
                data: [10,20,30,40,50,60,70,80,90,100,11,12,13,14,15,16,17,18,19,20, 10, 11, 12, 12, 34, 53, 87, 74, 46, 86],
                label: 'Voltage'
            },
        ],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',]
    };

    const options = {
        animation: false,
        cornerRadius: 20,
        layout: { padding: 0 },
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        borderWidth: 20,
    
        scales: {
          xAxes: [
            {
              barThickness: 12,
              maxBarThickness: 10,
              barPercentage: 0.5,
              categoryPercentage: 0.5,
              ticks: {
                fontColor: theme.palette.text.primary
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: theme.palette.text.secondary,
                beginAtZero: true,
                min: 0
              },
              gridLines: {
                borderDash: [4],
                borderDashOffset: [2],
                color: theme.palette.divider,
                drawBorder: false,
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
                zeroLineColor: theme.palette.divider
              }
            }
          ]
        },
        tooltips: {
          backgroundColor: theme.palette.background.default,
          bodyFontColor: theme.palette.text.secondary,
          borderColor: theme.palette.divider,
          borderWidth: 1,
          enabled: true,
          footerFontColor: theme.palette.text.secondary,
          intersect: false,
          mode: 'index',
          titleFontColor: theme.palette.text.primary
        }
      };

      return (
          <Paper className={classes.chart}>
              <Box className={classes.chart} position="relative">
                  <Typography variant="h5" gutterBottom>
                      Average Charge: 86%
                  </Typography>
                  <Bar data={graph} option={options}/>
              </Box>
          </Paper>
      )
};

export default Batteries;