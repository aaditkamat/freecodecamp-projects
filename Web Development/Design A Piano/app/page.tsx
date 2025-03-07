import { Fragment } from "react";
import Logo from "../components/Logo";
import Piano from "../components/Piano";

export default function Home() {
  return (
    <div className="bg-green-950 w-fit rounded-lg">
      <div className="h-2 invisible"></div>
      <Logo />
      <div className="h-12 invisible"></div>
      <div className="flex flex-row">
        <Piano />
        <div className="h-[200] w-8 invisible"></div>
      </div>
      <div className="h-12 invisible"></div>
    </div>
  );
}
