import { Dispatch, SetStateAction } from "react";
export declare const useStateToggle: (initialValue?: boolean) => [boolean, () => void, Dispatch<SetStateAction<boolean>>];
