import React from 'react';
import EditorStateTransfer from '../../../utils/EditorStateTransfer';
import { MatrixClientProps } from '../../../contexts/MatrixClientContext';
interface IEditMessageComposerProps extends MatrixClientProps {
    editState: EditorStateTransfer;
    className?: string;
}
declare const EditMessageComposerWithMatrixClient: React.ForwardRefExoticComponent<Omit<IEditMessageComposerProps, "mxClient"> & React.RefAttributes<React.Component<IEditMessageComposerProps, any, any>>>;
export default EditMessageComposerWithMatrixClient;
