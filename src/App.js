import React from "react"
import AppStyles from "./styles"
import LabTester from './LabTester'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fabGithub } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
const App = () => (
  <AppStyles>
    <pre><code>{`
dP         .d888888   888888ba   888888ba  d888888P  88888888b .d88888b  d888888P  88888888b  888888ba  
88        d8'    88   88    \`8b  88    \`8b    88     88        88.    "'    88     88         88    \`8b
88        88aaaaa88a a88aaaa8P' a88aaaa8P'    88    a88aaaa    \`Y88888b.    88    a88aaaa    a88aaaa8P'
88        88     88   88   \`8b.  88   \`8b.    88     88              \`8b    88     88         88   \`8b.
88        88     88   88    .88  88    .88    88     88        d8'   .8P    88     88         88     88
88888888P 88     88   88888888P  88888888P    dP     88888888P  Y88888P     dP     88888888P  dP     dP`}</code></pre>

    <LabTester />
    <a href='https://github.com/juiceghost/labbtester'>Github</a>
  </AppStyles>);

export default App