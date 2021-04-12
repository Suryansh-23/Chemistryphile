import React, { useState } from "react";
import "primereact/resources/primereact.min.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import IframeResizer from "iframe-resizer-react";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-purple/theme.css";
import { InputText } from "primereact/inputtext";
import PeriodicTable from "./PeriodicTable";

let temp =
  "https://pubchem.ncbi.nlm.nih.gov/compound/Benzene#section=Structures&embed=true&hide_title=true";

const Main = () => {
  const [value, setValue] = useState("Benzene");
  const [widgetId, setWidgetId] = useState(temp);
  const [compound, setCompound] = useState({ C: 6, H: 6 });

  return (
    <div>
      <div className="p-card" style={{ minWidth: "200px" }}>
        <span className="p-input-icon-left p-card-content">
          <i className="pi pi-search" />
          <InputText
            style={{ maxWidth: "800px", width: "600px" }}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              temp =
                "https://pubchem.ncbi.nlm.nih.gov/compound/" +
                e.target.value +
                "#section=Structures&embed=true&hide_title=true";
            }}
            onKeyPress={(e) => {
              if (e.code === "Enter") {
                setWidgetId(temp);
                getAtoms(value, setCompound);
              }
            }}
            placeholder="Type Here To Search"
          />
          <Button
            style={{ marginLeft: "-38px" }}
            icon="pi pi-search"
            className="p-button"
            onClick={() => {
              setWidgetId(temp);
              getAtoms(value, setCompound);
            }}
          />
        </span>
      </div>
      <div style={{ paddingTop: 100 }}>
        <Card
          title=""
          style={{ width: "75rem", margin: "auto", borderRadius: "10px" }}
        >
          <IframeResizer
            title="Structures"
            id="struct"
            heightCalculationMethod="bodyScroll"
            className="pubchem-widget"
            target="_self"
            src={widgetId}
            checkOrigin={false}
            style={{
              width: "100%",
              minHeight: 600,
              border: "0px",
              borderRadius: "10px",
            }}
          ></IframeResizer>
          <PeriodicTable toShow={compound} compound={value} />
        </Card>
      </div>
    </div>
  );
};

let getAtoms = (name, func) => {
  const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURI(
    name.trim()
  )}/property/MolecularFormula/JSON`;
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      try {
        return data["PropertyTable"]["Properties"][0]["MolecularFormula"];
      } catch {}
    })
    .then((compound) => {
      const atoms = {};
      const regex = /[A-Z][a-z]?/gm;
      let m;
      while ((m = regex.exec(compound)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        for (let i of m) {
          atoms[i] = 0;
        }
      }
      func(atoms);
    });
};

export default Main;
