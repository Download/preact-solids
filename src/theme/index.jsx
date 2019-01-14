import ulog from 'ulog'
import { h } from 'preact'
import { createContext } from 'preact-context'

const log = ulog('preact-solids:theme')

export const Theme = createContext({})
export const Provider = Theme.Provider
export const Consumer = Theme.Consumer

export default { Theme, Provider, Consumer }

log('Initialized')
