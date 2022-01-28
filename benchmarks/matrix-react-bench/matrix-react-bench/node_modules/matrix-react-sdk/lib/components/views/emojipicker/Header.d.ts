import React from 'react';
import { CategoryKey, ICategory } from "./Category";
interface IProps {
    categories: ICategory[];
    onAnchorClick(id: CategoryKey): void;
}
declare class Header extends React.PureComponent<IProps> {
    private findNearestEnabled;
    private changeCategoryRelative;
    private changeCategoryAbsolute;
    private onKeyDown;
    render(): JSX.Element;
}
export default Header;
