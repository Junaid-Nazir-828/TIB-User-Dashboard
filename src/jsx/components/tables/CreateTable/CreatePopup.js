import "./create.css";
import { useState } from "react";

export const CreatePopup = ({ handleCloseButton  , handleCreateButton }) => {

    const [tableName , setTableName] = useState('');
    const [trendTime , setTrendTime] = useState('');
    const [breakoutTime , setBreakoutTime] = useState('');
    const [script , setScript ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setTableName(tableName);
        setTrendTime(trendTime);
        setBreakoutTime(breakoutTime);
        setScript(script);

        console.log(`${tableName} ${trendTime} ${breakoutTime} ${script}`)
    }

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
                                <form
                                    className="form-valide"
                                    // action="#"
                                    // method="post"
                                    onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-tableName">
                                                    Table Name
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="val-tableName"
                                                        name="val-tableName"
                                                        placeholder="Enter table name.."
                                                        onChange={(event) => setTableName(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-trendTime">
                                                    Trend Time{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="val-trendTime"
                                                        name="val-trendTime"
                                                        placeholder="Enter trend time.."
                                                        // value={formData.trendTime}
                                                        onChange={(event) => setTrendTime(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-breakoutTime">
                                                    Breakout Time
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="val-breakoutTime"
                                                        name="val-breakoutTime"
                                                        placeholder="Enter breakout Time.."
                                                        // value={formData.breakoutTime}
                                                        onChange={(event) => setBreakoutTime(event.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-script">
                                                    Script Name{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <select
                                                        // value={formData.script}
                                                        onChange={(event) => setScript(event.target.value)}
                                                        className="form-control"
                                                        id="val-script"
                                                        name="val-script">
                                                        <option value="">
                                                            Please select
                                                        </option>
                                                        <option value="NIFTY">
                                                            NIFTY
                                                        </option>
                                                        <option value="SENSEX">
                                                            SENSEX
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button
                                                onClick={handleCreateButton}
                                                type="submit"
                                                className="btn mt-3 btn-primary">
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
