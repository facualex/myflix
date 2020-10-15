import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
    ${reset}
    // Other css styles and overrides here
    html {
        font-family: 'Roboto';
    }
`

