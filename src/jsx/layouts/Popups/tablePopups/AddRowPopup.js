

export const AddRowPopup = ({ handleCloseButton, handleAddRowButton }) => {
    return (
        <>
            {/* Render the popup conditionally */}
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Row Info</h4>
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
                                // onSubmit={handleSubmit}
                            >
                                <div className="row">
                                    <div className="col-xl-12">
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
                                                    // onChange={(
                                                    //     event
                                                    // ) =>
                                                    //     setScript(
                                                    //         event
                                                    //             .target
                                                    //             .value
                                                    //     )
                                                    // }
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
                                            onClick={handleAddRowButton}
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
        </>
    );
};

export default AddRowPopup;
