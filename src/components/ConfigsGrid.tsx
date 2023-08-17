import { useEffect, useState } from "react";
import "../assets/css/General.css";
import { getconfigs } from "../utils/api/Config";
import { Building } from "../utils/types";
import { GetBuildingType } from "../utils/GetBuildingType";

const ConfigsGrid = () => {

  const [configs, setConfigs] = useState<Building[]>([])

  useEffect(() => {
     getconfigs().then((res) => setConfigs(res))
  }, [])
  

  return (
    <div className="container">
      <div className="row border-bottom py-4 text-center color-B9561F">
        <div className="col">Building Type</div>
        <div className="col">Building Cost</div>
        <div className="col">ConstructionTime(s)</div>
      </div>
     {
      configs.map((item, i) => {
        return <div key={i} className="row border-bottom py-4 text-center">
        <div className="col">{GetBuildingType(item.buildingType)}</div>
        <div className="col">{item.buildingCost}</div>
        <div className="col">{item.constructionTime}</div>
      </div>
      })
     }
    </div>
  )
}
export default ConfigsGrid
