export const CreatePopup = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Table Info</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-validation">
                                <form
                                    className="form-valide"
                                    action="#"
                                    method="post"
                                    onSubmit={(e) => e.preventDefault()}>
                                    <div className="row">
                                        <div className="col-xl-10">
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-username">
                                                    Table Name
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="val-username"
                                                        name="val-username"
                                                        placeholder="Enter table name.."
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-email">
                                                    Trend Time{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="val-email"
                                                        name="val-email"
                                                        placeholder="Enter trend time.."
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-password">
                                                    Breakout Time
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="val-password"
                                                        name="val-password"
                                                        placeholder="Enter breakout Time.."
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3 row">
                                                <label
                                                    className="col-lg-4 col-form-label"
                                                    htmlFor="val-confirm-password">
                                                    Script Name{" "}
                                                    <span className="text-danger">
                                                        *
                                                    </span>
                                                </label>
                                                <div className="col-lg-6">
                                                    <select
                                                        className="form-control"
                                                        id="val-skill"
                                                        name="val-skill">
                                                        <option value="">
                                                            Please select
                                                        </option>
                                                        <option value="html">
                                                            NIFTY
                                                        </option>
                                                        <option value="css">
                                                            SENSEX
                                                        </option>
                                                        
                                                    </select>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>                                    
                                        <button
                                            type="submit"
                                            className="btn mt-3 btn-primary">
                                            Create
                                        </button>                                    
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
