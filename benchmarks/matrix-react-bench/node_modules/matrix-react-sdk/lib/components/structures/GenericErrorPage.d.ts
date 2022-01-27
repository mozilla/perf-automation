import React from 'react';
interface IProps {
    title: React.ReactNode;
    message: React.ReactNode;
}
export default class GenericErrorPage extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
