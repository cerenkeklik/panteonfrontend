import { useEffect, useState } from 'react'
import { AddConfigFormType } from '../../utils/types'
import { addconfig, getavailables } from '../../utils/api/Config'
import { useNavigate } from 'react-router-dom'

const AddConfigurationItemModal = () => {
  const [availables, setAvailables] = useState<string[]>([])

  let nav = useNavigate()

  useEffect(() => {
    getavailables().then((res) => {
      console.log(res)
      setAvailables(res)
    })
  }, [])

  const [formInput, setFormInput] = useState<AddConfigFormType>({
    BuildingCost: 1,
    BuildingType: 0,
    ConstructionTime: 30,
    BuildingCostError: null,
    BuildingTypeError: null,
    ConstructionTimeError: null,
  })

  const UpdateConstTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let val = Number(e.target.value)
    if (val >= 30 && val <= 1800) {
      setFormInput((prev: AddConfigFormType) => {
        return { ...prev, ConstructionTime: val, ConstructionTimeError: null }
      })
    } else {
      setFormInput((prev: AddConfigFormType) => {
        return {
          ...prev,
          ConstructionTimeError: 'Time should be between 30 and 1800s',
        }
      })
    }
  }

  const UpdateCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let val = Number(e.target.value)

    if (val > 0) {
      setFormInput((prev: AddConfigFormType) => {
        return { ...prev, BuildingCost: val, BuildingCostError: null }
      })
    } else {
      setFormInput((prev: AddConfigFormType) => {
        return {
          ...prev,
          BuildingCostError: 'Cost should be a positive number.',
        }
      })
    }
  }

  const formOnSubmit = (e: any) => {
    e.preventDefault()
    addconfig(formInput.BuildingType, formInput.BuildingCost, formInput.ConstructionTime).then((res) => {
      console.log(res)
      window.location.reload()
    })
  }

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Add New Configuration
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() =>
                setFormInput({
                  BuildingCost: 1,
                  BuildingType: 0,
                  ConstructionTime: 30,
                  BuildingCostError: null,
                  BuildingTypeError: null,
                  ConstructionTimeError: null,
                })
              }
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <form
              onSubmit={formOnSubmit}
              className="d-flex flex-column gap-4 w-75 py-4"
            >
              <div className="d-flex gap-2">
                <div className="d-flex flex-column gap-1">
                  <label>Type</label>
                  <select
                    className="form-select"
                    required
                    onChange={(e) =>
                      setFormInput((prev: any) => {
                        return { ...prev, BuildingType: Number(e.target.value) }
                      })
                    }
                  >
                    <option selected disabled>
                      Select
                    </option>
                    {availables.map((item: string, i: number) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className="d-flex flex-column gap-1">
                  <label>Building Cost</label>
                  <input
                    className="form-control"
                    type="number"
                    required
                    onChange={(e) => UpdateCost(e)}
                  />
                  {formInput.BuildingCostError && (
                    <div className="color-red font-size-12">
                      {formInput.BuildingCostError}
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex flex-column gap-1">
                <label>Construction Time(s)</label>
                <input
                  className="form-control"
                  type="number"
                  required
                  onChange={(e) => UpdateConstTime(e)}
                />
                {formInput.ConstructionTimeError && (
                  <div className="color-red font-size-12">
                    {formInput.ConstructionTimeError}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn bg-B9561F color-white add-config-btn"
                disabled={
                  !formInput.BuildingCostError &&
                  !formInput.BuildingTypeError &&
                  !formInput.ConstructionTimeError
                    ? false
                    : true
                }
              >
                OK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddConfigurationItemModal
