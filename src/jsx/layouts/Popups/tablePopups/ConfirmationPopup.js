// import "../../../components/tables/CreateTable/create.css";

export const ConfirmationPopup = ({
    text,
    handleCloseButton,
    handleYesButton,
}) => {
    return (
        <>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Confirmation</h4>
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
                                            <p
                                                className="col-lg-8"
                                                htmlFor="val-script">
                                                {text}
                                            </p>
                                        </div>
                                        <div className="form-group mb-3 row">
                                            <button
                                                onClick={handleYesButton}
                                                type="submit"
                                                className="btn mt-3 btn-success col-lg-2">
                                                Yes
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn mt-3 btn-danger col-lg-2">
                                                No
                                            </button>
                                        </div>
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

export default ConfirmationPopup;
