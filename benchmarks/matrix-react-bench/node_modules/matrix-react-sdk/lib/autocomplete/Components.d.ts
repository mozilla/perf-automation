import React from 'react';
interface ITextualCompletionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    className?: string;
}
export declare const TextualCompletion: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<ITextualCompletionProps>>;
interface IPillCompletionProps extends ITextualCompletionProps {
    children?: React.ReactNode;
}
export declare const PillCompletion: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<IPillCompletionProps>>;
export {};
