import { Button, ButtonOwnProps } from '@mui/material'
import { UltrusMUIPropsAdapter } from 'lib/types'

type UltrusButtonProps = {
    // @todo: add variant information as well as other props specific to UltrusButton
} & UltrusMUIPropsAdapter<HTMLButtonElement, ButtonOwnProps>

export const UltrusButton = ({ children, ...props }: UltrusButtonProps) => (
    <Button {...props}>{children}</Button>
)
