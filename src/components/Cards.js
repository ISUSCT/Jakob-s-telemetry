import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    summaryCards: {
      display: "flex",
      flexWrap: "wrap",
    },
    summaryCard: {
      margin: theme.spacing(1),
      flexGrow: 1,
      padding: theme.spacing(3),
      "&:hover": {
          backgroundColor: "#F5F5F5",
      },
    },
    text: {
        color: "red",
    },
  }));

export function SummaryCard({ title, value, component }) {
    const classes = useStyles();
    return (
        <Paper elevation={2} className={classes.summaryCard}>
            <Typography className={classes.text} variant="h5" gutterBottom>
                {title}
            </Typography>
            {component || (
                <Typography variant="h3">
                    {value}
                </Typography>
            )}
        </Paper>
    );
}

export default function Cards() {
    const classes = useStyles();
    return (
        <div className={classes.summaryCards}>
            <SummaryCard title={"Speed"} value={"35 mph"} />
            <SummaryCard title={"RPM"} value={"1000"} />
            <SummaryCard title={"Odometer"} value={"1000 miles"} />
            <SummaryCard title={"Voltage"} value={"13 Volts"} />
            <SummaryCard title={"Acceleration"} value={"75%"} />
            <SummaryCard title={"Amperage Consumption"} value={"35 Amps"} />
        </div>
    );
}