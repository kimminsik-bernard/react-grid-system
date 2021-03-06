declare module 'react-grid-system' {
    import * as React from 'react'
    type Align = "normal" | "start" | "center" | "end"
    type Offsets = {
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number
    }
    type Push = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }
    type Pull = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }
    type ColProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        debug?: boolean,
        align?: Align
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number,
        offset?: Offsets,
        push?: Push,
        pull?: Pull,
        style?: object
    }

    type ContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
        fluid?: boolean,
        style?: object
    }

    type RowProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        align?: Align,
        debug?: boolean,
        style?: object,
        nogutter?: boolean
    }

    type ClearFixProps = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }

    type HiddenProps = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }

    type ScreenClassRenderProps = {
        render?: Function
    }

    type VisibleProps = {
        xs?: boolean,
        sm?: boolean,
        md?: boolean,
        lg?: boolean,
        xl?: boolean
    }

    export class Col extends React.Component<ColProps, any> {}
    export class Container extends React.Component<ContainerProps, any> {}
    export class Row extends React.Component<RowProps, any> {}
    export class ClearFix extends React.Component<ClearFixProps, any> {}
    export class Hidden extends React.Component<HiddenProps, any> {}
    export class ScreenClassRender extends React.Component<ScreenClassRenderProps, any> {}
    export class Visible extends React.Component<VisibleProps, any> {}
}
