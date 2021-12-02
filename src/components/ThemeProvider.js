import { Container, createTheme, Paper, ThemeProvider as MThemeProvider, Typography } from "@mui/material";


const ThemeProvider = ({ children }) => {

    const theme = createTheme({
        palette: {
            mode: "dark",
            background: { paper: "#151515" }
        }
    });

    return (
        <MThemeProvider theme={theme}>
            <Paper
                elevation={0}
                sx={{
                    minHeight: "100vh",

                    borderRadius: 0,
                }}>
                <Paper
                    elevation={0}
                    sx={{
                        height: "20vh",
                        borderRadius: 0,
                    }}
                    component={Container}
                >
                    <Typography variant="h4">Simple React app</Typography>
                </Paper>
                <Paper
                    elevation={0}
                    component={Container}
                    sx={{
                        borderRadius: 0,
                        width: "100vw",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        height: "80vh"
                    }}
                >
                    {children}
                </Paper>
            </Paper>
        </MThemeProvider>
    )

}

export default ThemeProvider