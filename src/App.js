import ParticlesBg from "particles-bg";
import logo from "./logo.svg";
import { motion } from "framer-motion";

import Profile from "./assets/Images/alison-wang-mou0S7ViElQ-unsplash.jpg";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Rotate90DegreesCcw } from "@material-ui/icons";

let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 10],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "absolute", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15, // or null,
  g: 5, // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
    ctx.beginPath();
    ctx.rect(
      particle.p.x,
      particle.p.y,
      particle.radius * 2,
      particle.radius * 2
    );
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.closePath();
  },
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },
  h3: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "5vw",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "15%",
  },
  span: {
    color: "Tomato",
  },
  paragraph: {
    color: "#ffffff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    fontSize: "3vw",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "25%",
  },
  profile: {
    height: 250,
    width: 250,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconDiv: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  icons: {
    fontSize: 50,
    color: "#ffffff",
    lineHeight: "1.2rem",
    margin: 20,
    "&:hover": {
      color: "#2978b5",
    },
  },
}));

function App() {
  const classes = useStyle();

  return (
    <>
      <div className={classes.root}>
        <div>
          <Typography className={classes.h3} variant="h3">
            {" "}
            Hii !, I'm <span className={classes.span}>Aditya Singh</span>{" "}
          </Typography>
          <Typography className={classes.paragraph} paragraph>
            Web{" "}
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: 10000,
                ease: "linear",
                delay: 0.1,
              }}
              src={logo}
              alt="ReactLogo"
              style={{ width: "60px", height: "60px" }}
            />{" "}
            Developer
          </Typography>
          <img className={classes.profile} src={Profile} alt="profile_image" />
          <div className={classes.iconDiv}>
            <a href="https://www.linkedin.com/in/aditya-singh-6904481a2/">
              <LinkedInIcon className={classes.icons} />
            </a>
            <a href="https://github.com/Adityasinghtomar3o3">
              <GitHubIcon className={classes.icons} />
            </a>
          </div>
        </div>
        <ParticlesBg
          type="lines"
          config={config}
          bg={true}
          style={{ margin: 0, padding: 0 }}
        />
      </div>
      <div></div>
    </>
  );
}

export default App;
