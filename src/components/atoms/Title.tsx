import { ITitle } from "../../Interfaces"


export const Title = (props:ITitle) => {

  return (
    <div className="text-gray-800 text-xl font-black">{props.text}</div>
  )
}
 