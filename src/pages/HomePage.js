import { useQuery } from "@apollo/client";
import { Paper, Typography } from "@mui/material"
import { protocolMetricsQuery } from "../components/GraphqlClient";


const HomePage = () => {
    const { loading, error, data } = useQuery(protocolMetricsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            {
                data?.protocolMetrics[0] && Object.keys(data?.protocolMetrics[0]).filter(x => !x.startsWith("_")).map((metric, i) => {

                    return (
                        <Paper key={i} sx={{
                            padding: "20px",
                            flexWrap: "wrap",
                            marginBottom: "10px",
                            width: {
                                xs: "90%",
                                md: "45%"
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <Typography variant="body1">{metric}</Typography>
                            <Typography variant="body2" > {data?.protocolMetrics[0][metric]} </Typography>
                        </Paper>
                    )
                })
            }
        </>
    )

}


export default HomePage
