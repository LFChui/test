import React, { createContext, useState } from "react";
import PageB from "./pageB";
import PageC from "./pageC";

export const UserAttrContext = createContext<any>(null);
interface Props {}
const PageA = (props: Props) => {
  const [controller, setController] = useState(1);
  const _setController = (value: number) => {
    console.log(123412);
    setController(value);
  };
  return (
    <UserAttrContext.Provider value={{ controller, _setController }}>
      <div>PageA</div>
      <PageB />
      <PageC />
    </UserAttrContext.Provider>
  );
};
export default PageA;
