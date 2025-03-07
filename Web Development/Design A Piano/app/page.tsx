import { Fragment } from "react";
import Logo from "../components/Logo";
import Piano from "../components/Piano";

export default function Home() {
  return (
    <Fragment>
      <Logo />
      <div className="h-12 invisible"></div>
      <Piano />
    </Fragment>
  );
}
