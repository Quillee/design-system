import { HTMLAttributes } from 'react'

// just for fun, probably will remove later :)
// @ts-ignore
interface Applicative<T> {}

export type UltrusMUIPropsAdapter<T extends HTMLElement, M = {}> = M &
    HTMLAttributes<T>
export type UltrusGenericMUIPropsAdapter<
    T extends HTMLElement,
    K,
    M extends Applicative<K>,
> = M & HTMLAttributes<T>
