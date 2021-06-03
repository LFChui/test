import { useContext } from "react";
import { UserAttrContext } from "./pageA";
import PageC from "./pageC";

interface Props {}
const PageB = (props: Props) => {
  const { controller, _setController } = useContext(UserAttrContext);
  const _onClick = () => {
    _setController(5);
  };
  return (
    <div>
      <div>PageB {controller}</div>
      <button onClick={_onClick}>点击</button>
      <PageC />
    </div>
  );
};
export default PageB;
