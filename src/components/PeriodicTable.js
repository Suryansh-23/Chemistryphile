import Element from "./Element";
import React, { Component, Fragment } from "react";
import { elements } from "./_data";

class PeriodicTable extends Component {
  state = {
    showInfo: false,
    element: {},
  };

  showInfo = (num) => {
    this.setState({ showInfo: true, element: elements[num] });
  };

  closeInfo = () => {
    this.setState({ showInfo: false });
  };

  render() {
    let {
      name,
      summary,
      symbol,
      category,
      number,
      source,
      appearance,
      atomic_mass,
      molar_heat,
      density,
      melt,
      boil,
    } = this.state.element;

    let toShowEl = this.props.toShow;
    const compound = this.props.compound.trim();
    let compoundName = "";
    try {
      compoundName =
        compound[0].toUpperCase() + compound.slice(1).toLowerCase();
    } catch {}
    return (
      <div className="wrapper">
        <h1>Elements present in {compoundName}</h1>
        <h3 style={{ margin: "auto" }}>Click to know info</h3>
        <div id="table">
          <Element showInfo={this.showInfo} toShow={toShowEl} num="1" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="2" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="3" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="4" />
          {/* Information Table */}
          {this.state.showInfo ? (
            <Fragment>
              <div id="element-box" className={`${category}`}>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>
              <div id="information">
                <div
                  onClick={this.closeInfo}
                  className="close-button"
                  title="Close Info"
                >
                  <span>
                    Close{" "}
                    <span>
                      <b>X</b>
                    </span>
                  </span>
                </div>
                <div>
                  <h1 className="big_title">{name}</h1>
                  <span className={`cat_name ${category}`}>{category}</span>
                  {appearance ? (
                    <div className="appearance">
                      <strong>Appearance:</strong> {appearance}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="atom_info">
                    <span>Atomic Mass: {atomic_mass} | </span>
                    <span>Density: {density}</span>
                    {molar_heat ? <span> | Molar Heat: {molar_heat}</span> : ""}
                    {melt ? <span> | Melt: {melt}K</span> : ""}
                    {boil ? <span> | Boil: {boil}K</span> : ""}
                  </div>
                  <div>
                    {summary} ...
                    <a target="_blank" href={source} rel="noreferrer">
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            ""
          )}
          <Element showInfo={this.showInfo} toShow={toShowEl} num="5" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="6" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="7" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="8" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="9" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="10" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="11" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="12" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="13" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="14" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="15" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="16" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="17" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="18" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="19" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="20" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="21" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="22" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="23" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="24" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="25" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="26" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="27" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="28" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="29" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="30" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="31" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="32" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="33" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="34" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="35" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="36" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="37" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="38" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="39" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="40" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="41" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="42" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="43" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="44" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="45" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="46" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="47" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="48" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="49" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="50" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="51" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="52" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="53" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="54" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="55" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="56" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="57" />

          {/* Lanthanoids split */}
          <Element showInfo={this.showInfo} toShow={toShowEl} num="72" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="73" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="74" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="75" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="76" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="77" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="78" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="79" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="80" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="81" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="82" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="83" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="84" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="85" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="86" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="87" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="88" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="89" />
          {/* Actinoids split */}
          <Element showInfo={this.showInfo} toShow={toShowEl} num="104" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="105" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="106" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="107" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="108" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="109" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="110" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="111" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="112" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="113" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="114" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="115" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="116" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="117" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="118" />
          {/* Lanthenoids */}
          <Element showInfo={this.showInfo} toShow={toShowEl} num="58" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="59" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="60" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="61" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="62" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="63" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="64" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="65" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="66" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="67" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="68" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="69" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="70" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="71" />
          {/* Actionoids */}
          <Element showInfo={this.showInfo} toShow={toShowEl} num="90" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="91" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="92" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="93" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="94" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="95" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="96" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="97" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="98" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="99" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="100" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="101" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="102" />
          <Element showInfo={this.showInfo} toShow={toShowEl} num="103" />
        </div>
      </div>
    );
  }
}

export default PeriodicTable;
