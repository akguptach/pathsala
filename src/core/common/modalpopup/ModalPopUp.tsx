// import { IModalPopUpInterProps } from '@Interface/ComponentInterface/modalPopupInterface'
import React from 'react'
// import { Col } from 'react-bootstrap'
// import InputField from '@Components/input/Input'
// import Table from '@Components/tableProjectLIst/TableProjectList'
const ModalPopupComponent = ({
//   handleClose,
//   handleDelete,
//   handleSubmit,
//   showHistory,
//   getModalData,
//   modalTitle,
//   color,
//   isDelete,
//   columns,
//   isSave,
//   tableData,
//   isButtonDisabled,
//   tableHistoryHeaders,
//   isShowGrid,
//   tableHeaders,
//   skipNumber,
//   modalWidth,
}) => {
  return (
    <div className="modal-container">
      <div
      
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                // style={{ color: `${color}` }}
                className="modal-title"
                id="exampleModalLongTitle"
              >
                {/* {modalTitle} */}
              </h5>

              <button
                // onClick={handleClose}
                type="button"
                className="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* <div className="modal-body">
              {getModalData && (
                <div>
                  {getModalData.map((field, index) => {
                    if (field.type) {
                      return (
                        <Col md={4} className="col-md-6" key={index}>
                          <InputField
                            className={field.className}
                            type={field.type}
                            label={field.label}
                            value={field.value}
                            options={field.options}
                            onChange={field.onChange}
                            placeholder={field.placeholder}
                          />
                        </Col>
                      )
                    } else {
                      return (
                        <p key={index}>
                          <strong>{field.name}: </strong>
                          {field.value}
                        </p>
                      )
                    }
                  })}
                </div>
              )}

              {isDelete && (
                <button className=" button-delete" onClick={handleDelete}>
                  Delete
                </button>
              )}
              {isSave && (
                <button className="btn-add mx-2" onClick={handleSubmit}  disabled={isButtonDisabled}>
                  Save
                </button>
              )}
              {
                isShowGrid && (
                 <Table
                  tableHeaders={tableHeaders}
                  tableData={tableData}
                  columns={columns}
                  skipNumber={skipNumber}
                />
                )
              }
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPopupComponent