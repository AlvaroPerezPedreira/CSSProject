import React from "react";
import "./slider.css";
import {
  Facebook,
  Instagram,
  Reddit,
  Tiktok,
  Twitch,
  Whatsapp,
  X,
  Youtube,
  Telegram,
} from "./icons/RS";
import {
  CssIcon,
  HtmlIcon,
  JavaScriptIcon,
  NpmIcon,
  ReactIcon,
  AngularIcon,
  VueIcon,
  ThreeIcon,
  TailwindIcon,
  ViteIcon,
  NodeIcon,
  SvelteIcon,
  ESLintIcon,
  TypeScriptIcon,
} from "./icons/Frontend";
import {
  SpringIcon,
  PythonIcon,
  MySQLIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  DockerIcon,
  SonarQubeIcon,
  GraphQLIcon,
  FirebaseIcon,
  ApacheIcon,
} from "./icons/Backend";

export default function Slider() {
  return (
    <div className="slider-page">
      <div className="slider-title"></div>
      <div className="slider-left">
        <div
          className="sliderL-itemList"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": "7",
          }}
        >
          <div className="sliderL-item" style={{ "--position": "1" }}>
            <img src="images/slider/clothes/adidas.svg" alt="" />
          </div>
          <div className="sliderL-item" style={{ "--position": "2" }}>
            <img src="images/slider/clothes/nike.svg" alt="" />
          </div>
          <div className="sliderL-item" style={{ "--position": "3" }}>
            <img src="images/slider/clothes/newbalance.svg" alt="" />
          </div>
          <div className="sliderL-item" style={{ "--position": "4" }}>
            <img src="images/slider/clothes/puma.svg" alt="" />
          </div>
          <div className="sliderL-item" style={{ "--position": "5" }}>
            <img src="images/slider/clothes/reebok.svg" alt="" />
          </div>
          <div className="sliderL-item" style={{ "--position": "6" }}>
            <img src="images/slider/clothes/underarmour.svg" alt="" />
          </div>
          <div className="sliderL-item" style={{ "--position": "7" }}>
            <img src="images/slider/clothes/zara.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="slider-right">
        <div
          className="sliderR-itemList"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": "8",
          }}
        >
          <div className="sliderR-item" style={{ "--position": "1" }}>
            <img src="images/slider/tech/amd.svg" alt="" />
          </div>
          <div className="sliderR-item" style={{ "--position": "2" }}>
            <img src="images/slider/tech/apple.svg" alt="" />
          </div>
          <div className="sliderR-item" style={{ "--position": "3" }}>
            <img src="images/slider/tech/google.svg" alt="" />
          </div>
          <div className="sliderR-item" style={{ "--position": "4" }}>
            <img src="images/slider/tech/intel.svg" alt="" />
          </div>
          <div className="sliderR-item" style={{ "--position": "5" }}>
            <img src="images/slider/tech/lg.svg" alt="" />
          </div>
          <div className="sliderR-item" style={{ "--position": "6" }}>
            <img src="images/slider/tech/nvidia.svg" alt="" />
          </div>
          <div className="sliderR-item" style={{ "--position": "7" }}>
            <img src="images/slider/tech/samsung.svg" alt="" />
          </div>
          <div className="sliderR-item" style={{ "--position": "8" }}>
            <img src="images/slider/tech/sony.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="slider-middle">
        <div
          className="sliderM1-itemList"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": "10",
          }}
        >
          <div className="sliderM1-item" style={{ "--position": "1" }}>
            <img src="images/slider/car/alfaromeo.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "2" }}>
            <img src="images/slider/car/astonmartin.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "3" }}>
            <img src="images/slider/car/bugatti.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "4" }}>
            <img src="images/slider/car/chevrolet.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "5" }}>
            <img src="images/slider/car/ferrari.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "6" }}>
            <img src="images/slider/car/lamborghini.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "7" }}>
            <img src="images/slider/car/maserati.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "8" }}>
            <img src="images/slider/car/peugeot.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "9" }}>
            <img src="images/slider/car/porsche.svg" alt="" />
          </div>
          <div className="sliderM1-item" style={{ "--position": "10" }}>
            <img src="images/slider/car/rollsroyce.svg" alt="" />
          </div>
        </div>
        <div
          className="sliderM2-itemList"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": "9",
          }}
        >
          <div className="sliderM2-item" style={{ "--position": "1" }}>
            <Facebook />
          </div>
          <div className="sliderM2-item" style={{ "--position": "2" }}>
            <X />
          </div>
          <div className="sliderM2-item" style={{ "--position": "3" }}>
            <Instagram />
          </div>
          <div className="sliderM2-item" style={{ "--position": "4" }}>
            <Youtube />
          </div>
          <div className="sliderM2-item" style={{ "--position": "5" }}>
            <Twitch />
          </div>
          <div className="sliderM2-item" style={{ "--position": "6" }}>
            <Tiktok />
          </div>
          <div className="sliderM2-item" style={{ "--position": "7" }}>
            <Reddit />
          </div>
          <div className="sliderM2-item" style={{ "--position": "8" }}>
            <Whatsapp />
          </div>
          <div className="sliderM2-item" style={{ "--position": "9" }}>
            <Telegram />
          </div>
        </div>
        <div
          className="sliderM3-itemList"
          style={{
            "--width": "50px",
            "--height": "50px",
            "--quantityM3": "14",
          }}
        >
          <div className="sliderM3-item" style={{ "--position": "1" }}>
            <ReactIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "2" }}>
            <NpmIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "3" }}>
            <VueIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "4" }}>
            <AngularIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "5" }}>
            <ThreeIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "6" }}>
            <JavaScriptIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "7" }}>
            <HtmlIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "8" }}>
            <CssIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "9" }}>
            <TailwindIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "10" }}>
            <SvelteIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "11" }}>
            <TypeScriptIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "12" }}>
            <ESLintIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "13" }}>
            <NodeIcon />
          </div>
          <div className="sliderM3-item" style={{ "--position": "14" }}>
            <ViteIcon />
          </div>
        </div>
        <div
          className="sliderM4-itemList"
          style={{
            "--width": "50px",
            "--height": "50px",
            "--quantityM4": "10",
          }}
        >
          <div className="sliderM4-item" style={{ "--position": "1" }}>
            <SpringIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "2" }}>
            <PythonIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "3" }}>
            <MySQLIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "4" }}>
            <PostgreSQLIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "5" }}>
            <MongoDBIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "6" }}>
            <DockerIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "7" }}>
            <SonarQubeIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "8" }}>
            <GraphQLIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "9" }}>
            <FirebaseIcon />
          </div>
          <div className="sliderM4-item" style={{ "--position": "10" }}>
            <ApacheIcon />
          </div>
        </div>
      </div>
      <div className="slider-footer"></div>
    </div>
  );
}
