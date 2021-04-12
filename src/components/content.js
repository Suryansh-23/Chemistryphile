import React from "react";
import { Card } from "primereact/card";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/vela-blue/theme.css";

const Main = () => {
  return (
    <div>
      <Card title="Simple Card" style={{ width: "75rem", margin: "auto" }}>
        <p className="p-m-0" style={{ lineHeight: "1.5" }}>
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas! */}
          <iframe
            title="3d"
            class="pubchem-widget"
            src="https://pubchem.ncbi.nlm.nih.gov/compound/aspirin#section=3D-Conformer&fullscreen=true&embed=ture&hide_title=true"
            style={{ width: "100%", height: "600px" }}
          ></iframe>
        </p>
      </Card>
    </div>
  );
};

export default Main;
