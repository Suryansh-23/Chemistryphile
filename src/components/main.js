import React, { useState } from "react";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import IframeResizer from "iframe-resizer-react";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-purple/theme.css";
import { InputText } from "primereact/inputtext";
import PeriodicTable from "./PeriodicTable";
import Intro from "./intro";
import ColorCodes from "./ColorCodes";

let temp = "";

const Main = () => {
  const [validity, setValidity] = useState(false);
  const [value, setValue] = useState("");
  const [widgetId, setWidgetId] = useState(temp);
  const [compound, setCompound] = useState({});

  return (
    <div className="main">
      <div className="p-card" style={{ minWidth: "200px" }}>
        <span className="p-input-icon-left p-card-content searchbar">
          <i className="pi pi-search" />
          <InputText
            className="search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              temp =
                "https://pubchem.ncbi.nlm.nih.gov/compound/" +
                e.target.value +
                "#section=Structures&embed=true&hide_title=true";
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setWidgetId(temp);
                chkCompoundName(value, setValidity);
                getAtoms(value, setCompound);
                // console.log("#", compound, "$", validity);
              }
            }}
            placeholder="Type Here To Search"
          />
          <Button
            style={{ marginLeft: "-38px", height: "40px" }}
            icon="pi pi-search"
            className="p-button"
            onClick={() => {
              setWidgetId(temp);
              getAtoms(value, setCompound);
              chkCompoundName(value, setValidity);
            }}
          />
        </span>
      </div>
      <div style={{ paddingTop: 100 }} className="container">
        <Card title="" style={{ margin: "auto", borderRadius: "10px" }}>
          {validity ? (
            <>
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
              <ColorCodes toShowEls={compound} />
              <PeriodicTable
                toShow={compound}
                compound={value}
                style={{ width: "100%" }}
              />
            </>
          ) : (
            <Intro />
          )}
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
      console.log("atoms ->", atoms);
      func(atoms);
    });
};

let chkCompoundName = (name, setFuncCallback) => {
  fetch(
    `https://pubchem.ncbi.nlm.nih.gov/compound/${encodeURIComponent(
      name
    )}#section=Structures&embed=true&hide_title=true`
  )
    .then((resp) => {
      let status = resp.status;
      console.log(status);
      if ((200 <= status) & (status <= 299)) {
        console.log(true);
        setFuncCallback(true);
        return true;
      } else {
        console.log(false);
        setFuncCallback(false);
        return false;
      }
    })
    .catch(() => {});
};

export default Main;
