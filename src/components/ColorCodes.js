import React from "react";
import { elements } from "./_color";
import { Chip } from "primereact/chip";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";

const ColorCodes = ({ toShowEls }) => {
  return (
    <div className="p-d-flex p-ai-baseline p-flex-wrap p-px-3">
      <div className="p-mr-2 p-mb-2">
        <h1>Color Codes : </h1>
      </div>
      {elements
        .filter((i) => {
          if (i["symbol"] in toShowEls) {
            return true;
          } else {
            // console.log(toShowEls);
            return false;
          }
        })
        .map((i) => {
          return (
            <Chip
              key={i["symbol"]}
              template={
                <div
                  className="p-d-flex p-ai-center"
                  style={{ fontSize: "1.25em" }}
                >
                  <i
                    className="pi pi-circle-on p-pr-1"
                    style={{ color: "#" + i["cpk-hex"] }}
                  ></i>
                  {i["name"]}
                </div>
              }
              className="p-mr-2 p-mb-2"
            />
          );
        })}
    </div>
  );
};

export default ColorCodes;
