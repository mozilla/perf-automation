import React from 'react';
interface IResizeHandleProps {
    vertical?: boolean;
    reverse?: boolean;
    id?: string;
    passRef?: React.RefObject<HTMLDivElement>;
}
declare const ResizeHandle: React.FC<IResizeHandleProps>;
export default ResizeHandle;
