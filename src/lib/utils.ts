// https://github.com/joschan21/breadit/blob/master/src/lib/utils.ts

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
