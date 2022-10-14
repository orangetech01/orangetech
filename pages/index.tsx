import React from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { css } from "@emotion/css";

const theme = createTheme();

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ background: "#c1885c" }}>
        <CssBaseline />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography component="h1" variant="h2">
            Executando React com Next.JS
          </Typography>
          <Typography component="h2" variant="h4">
            Site criado em TypeScript publicado na Vercel.
          </Typography>
          <Typography component="h3" variant="h5">
            <ul
              className={css`
                font-size: 20px;
              `}
            >
              <h2>OrangeTech</h2>
              <li>Daniel Kotsugai</li>
              <li>Geovanna Anjos</li>
              <li>Huly Santos das Chagas</li>
              <li>Luciana</li>
              <li>Rebeca Valenzuela</li>
              <li>Thais Nascimento</li>
            </ul>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
