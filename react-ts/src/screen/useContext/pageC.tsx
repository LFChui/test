import { useContext } from "react";
import { UserAttrContext } from "./pageA";

interface Props {}
const PageC = (props: Props) => {
  const { controller } = useContext(UserAttrContext);

  return (
    <div>
      <div>PageC {controller}</div>
    </div>
  );
};
export default PageC;
