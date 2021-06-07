import React from "react";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import { Card } from "primereact/card";
import cubes from "../img/cubes.svg";
import _2d from "../img/2d.svg";
import periodicTable from "../img/periodic-table.svg";

const header = (props) => {
  const imgUrls = [cubes, _2d, periodicTable];
  return (
    <div className="introimg">
      <img
        alt="Card"
        src={imgUrls[props]}
        style={{ width: "10em", paddingTop: "1rem" }}
      />
    </div>
  );
};

const Intro = () => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center p-flex-column">
      <div className="p-mb-2">
        This Web-App is created by
        <h2 className="p-px-2" style={{ fontFamily: "Montserrat" }}>
          Suryansh Chauhan
        </h2>
      </div>
      <div className="p-mb-2">
        This is a Molecule Viewer that allows the user to search for the
        structure of more than{" "}
        <h2 className="p-px-2" style={{ fontFamily: "Montserrat" }}>
          100 million compounds
        </h2>
      </div>
      <div className="p-d-flex p-flex-column p-flex-lg-row">
        {["3D Structure", "2D Structure", "Compound Elements"].map((i) => {
          const strMapInd = {
            "3D Structure": [
              0,
              "You can get the 3D structure of any compound with various controls",
            ],
            "2D Structure": [
              1,
              "Gets a plain 2D image for you to download or view anytime",
            ],
            "Compound Elements": [
              2,
              "Shows you the elements that form the compound",
            ],
          };
          return (
            <Card
              className="p-mb-6 p-mr-6 p-mx-5"
              title={i}
              key={strMapInd[i][0]}
              subTitle={strMapInd[i][1]}
              style={{ width: "13em" }}
              header={header(strMapInd[i][0])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Intro;
