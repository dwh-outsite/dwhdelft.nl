import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export default (...args) => twMerge(clsx(...args))
