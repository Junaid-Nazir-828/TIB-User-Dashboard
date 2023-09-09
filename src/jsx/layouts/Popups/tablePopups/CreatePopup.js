import "../../../../index.css";
import { useState } from "react";

const scriptOptions = {
  All: "ALL",
  FnO: "FNO",
  Nifty50: "NIFTY 50",
  NiftyNext50: "NIFTY NEXT 50",
  Nifty100: "NIFTY 100",
  Nifty200: "NIFTY 200",
  Nifty500: "NIFTY 500",
  NiftyMidcap50: "NIFTY MIDCAP 50",
  NiftyMidcap100: "NIFTY MIDCAP 100",
  NiftySmlcap100: "NIFTY SMLCAP 100",
  NiftyMidcap150: "NIFTY MIDCAP 150",
  NiftySmlcap50: "NIFTY SMLCAP 50",
  NiftySmlcap250: "NIFTY SMLCAP 250",
  NiftyMidsml400: "NIFTY MIDSML 400",
  NiftyBank: "NIFTY BANK",
  NiftyAuto: "NIFTY AUTO",
  NiftyFinService: "NIFTY FIN SERVICE",
  NiftyFmcg: "NIFTY FMCG",
  NiftyIt: "NIFTY IT",
  NiftyMedia: "NIFTY MEDIA",
  NiftyMetal: "NIFTY METAL",
  NiftyPharma: "NIFTY PHARMA",
  NiftyPsuBank: "NIFTY PSU BANK",
  NiftyPvtBank: "NIFTY PVT BANK",
  NiftyRealty: "NIFTY REALTY",
  Nifty50Value20: "NIFTY50 VALUE 20",
  NiftyAlpha50: "NIFTY ALPHA 50",
  Nifty50EqlWgt: "NIFTY50 EQL WGT",
  Nifty100EqlWgt: "NIFTY100 EQL WGT",
  Nifty100Lowvol30: "NIFTY100 LOWVOL30",
  Nifty200Qualty30: "NIFTY200 QUALTY30",
  NiftyCommodities: "NIFTY COMMODITIES",
  NiftyConsumption: "NIFTY CONSUMPTION",
  NiftyEnergy: "NIFTY ENERGY",
  NiftyInfra: "NIFTY INFRA",
  NiftyMnc: "NIFTY MNC",
  NiftyPse: "NIFTY PSE",
  NiftyServSector: "NIFTY SERV SECTOR",
  SBIN: "SBIN",
};

const trendTimeOptions = {
  "1 minute": 1,
  "3 minutes": 3,
  "5 minutes": 5,
  "15 minutes": 15,
  "30 minutes": 30,
  "45 minutes": 45,
  "1 hour": 60,
  "2 hours": 120,
  "3 hours": 180,
  "4 hours": 240,
  "1 day": 1440,
  "1 week": 10080,
  "1 month": 43200,
};

// Time options for Breakout Time
const breakoutTimeOptions = {
  "1 minute": 1,
  "3 minutes": 3,
  "5 minutes": 5,
  "15 minutes": 15,
  "30 minutes": 30,
  "45 minutes": 45,
  "1 hour": 60,
  "2 hours": 120,
  "3 hours": 180,
  "4 hours": 240,
  "1 day": 1440,
  "1 week": 10080,
  "1 month": 43200,
};

export const CreatePopup = ({ handleCloseButton, handleCreateButton }) => {
  const [tableName, setTableName] = useState("");
  const [trendTime, setTrendTime] = useState("");
  const [breakoutTime, setBreakoutTime] = useState("");
  const [script, setScript] = useState("");
  console.log(tableName, trendTime, breakoutTime, script);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`${tableName} ${trendTime} ${breakoutTime} ${script}`);
  };

  const handleChangeBreakoutTime = (event) => {
    console.log(event.target.value > trendTime);
    if (trendTime !== undefined && parseFloat(event.target.value) > parseFloat(trendTime)) {
      if (parseFloat(event.target.value) === 1440) setBreakoutTime("D");
      else if (parseFloat(event.target.value) === 10080) setBreakoutTime("W");
      else if (parseFloat(event.target.value) === 43200) setBreakoutTime("M");
      else setBreakoutTime(event.target.value);
    } else {
      alert("Breakout time must be greater than trend time");
    }
  };

  return (
    <>
      <div className="modal-content">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Table Info</h4>
              <button className="btn" onClick={handleCloseButton}>
                X
              </button>
            </div>
            <div className="card-body">
              <div className="form-validation">
                <form className="form-valide" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-tableName"
                        >
                          Table Name
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            id="val-tableName"
                            name="val-tableName"
                            placeholder="Enter table name.."
                            onChange={(event) =>
                              setTableName(event.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-trendTime"
                        >
                          Trend Time <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            id="val-trendTime"
                            name="val-trendTime"
                            onChange={(event) =>
                              setTrendTime(event.target.value)
                            }
                            value={trendTime}
                          >
                            <option value="">Please select</option>
                            {Object.keys(trendTimeOptions).map((key) => (
                              <option key={key} value={trendTimeOptions[key]}>
                                {key}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-breakoutTime"
                        >
                          Breakout Time
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            id="val-breakoutTime"
                            name="val-breakoutTime"
                            onChange={handleChangeBreakoutTime}
                            value={breakoutTime}
                          >
                            <option value="">Please select</option>
                            {Object.keys(breakoutTimeOptions).map((key) => (
                              <option
                                key={key}
                                value={breakoutTimeOptions[key]}
                              >
                                {key}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-3 row">
                        <label
                          className="col-lg-4 col-form-label"
                          htmlFor="val-script"
                        >
                          Script Name <span className="text-danger">*</span>
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            id="val-script"
                            name="val-script"
                            onChange={(event) => setScript(event.target.value)}
                            value={script}
                          >
                            <option value="">Please select</option>
                            {Object.entries(scriptOptions).map(
                              ([value, label]) => (
                                <option key={value} value={value}>
                                  {label}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          handleCreateButton(
                            tableName,
                            trendTime,
                            breakoutTime,
                            script
                          )
                        }
                        type="submit"
                        className="btn mt-3 btn-primary"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePopup;
