import React from "react";
interface IProps extends Omit<React.HTMLProps<HTMLDivElement>, "onKeyDown"> {
}
declare const Toolbar: React.FC<IProps>;
export default Toolbar;
