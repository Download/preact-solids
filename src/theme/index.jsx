import ulog from 'ulog'
import { h } from 'preact'
import { createContext } from '@stijndewitt/preact-context'

const log = ulog('preact-solids:theme')

export const Theme = createContext({}, undefined, { providerOptional: true })
export const Provider = Theme.Provider
export const Consumer = Theme.Consumer

export default { Theme, Provider, Consumer }

log('Initialized')
