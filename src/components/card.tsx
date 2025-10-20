import type { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}
const Card = ({children}: Props) => {
  return (
    <div className="card mb-4">
        <div className="card-body">
            {children}
        </div>
    </div>
  )
}
export default Card