import {
  Box,
  CssBaseline,
  Paper,
  Stack,
  ThemeProvider,
  styled,
} from "@mui/material";
import { CSSProperties, FC } from "react";
import AreaFill from "./components/AreaFill";
import ContactInfo from "./components/ContactInfo";
import Hero from "./components/Hero/Hero";
import MetaInfo from "./components/MetaInfo/MetaInfo";
import MyExperience from "./components/MyExperience";
import theme from "./config/theme";
import "./index.css";

const primaryColumnCss: CSSProperties = { flex: 1 };
const secondaryColumnCss: CSSProperties = { width: "30%" };

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrintContextContainer>
        <Paper elevation={15} style={{ margin: "auto" }}>
          <ResumeContainer spacing={1}>
            <TopSection>
              <LeftSpacer>
                <AreaFill />
              </LeftSpacer>
              <Hero style={primaryColumnCss} />
              <ContactInfo style={secondaryColumnCss} />
              <CenterDot />
            </TopSection>
            <BottomSection>
              <LeftSpacer />
              <MyExperience style={primaryColumnCss} />
              <MetaInfo style={secondaryColumnCss} />
            </BottomSection>
          </ResumeContainer>
        </Paper>
      </PrintContextContainer>
    </ThemeProvider>
  );
};

const PrintContextContainer = styled(Box)(({ theme }) => ({
  "@media not print": {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#444",
    overflow: "auto",
  },
}));

const ResumeContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  minWidth: "8.5in",
  width: "8.5in",
  height: "11in",
  display: "flex",
  flexWrap: "nowrap",
  padding: theme.spacing(1),
}));

const VerticalSection = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

const TopSection = styled(VerticalSection)({
  position: "relative",
});

const BottomSection = styled(VerticalSection)({
  flex: 1,
});

const LeftSpacer = styled(Box)({
  width: 10,
  height: "100%",
});

const CenterDot = styled(Box)(({ theme }) => ({
  width: theme.spacing(3),
  height: theme.spacing(3),
  borderRadius: theme.spacing(1.5),
  position: "absolute",
  backgroundColor: theme.palette.secondary.main,
  bottom: 0,
  right: secondaryColumnCss.width,
  transform: `translate(${theme.spacing(1)}, ${theme.spacing(2)})`,
  border: "3px solid white",
}));

export default App;
