import { TooltipPlacement } from "antd/es/tooltip";

export interface ISiderBarIcon {
    type: string;
    selected: boolean;
    opened?: boolean;
    popNumber?: string | null,
    icon?: React.ReactNode;
    placement?: TooltipPlacement;
    customIcon?: React.ReactNode;
    style?: React.CSSProperties | undefined;
    onClick?: () => void;
}