
import React from 'react'

// Components NC
import StylesCSSInLine from './views/1-basic/styles/styles-css/StylesCSSInLine'
import StylesCSSInterno from './views/1-basic/styles/styles-css/StylesCSSInterno'
import StylesCSSExterno from './views/1-basic/styles/styles-css/StylesCSSExterno'
import StylesSASS from './views/1-basic/styles/styles-sass/StylesSCSS'
import StylesCSSModules from './views/1-basic/styles/css-modules/StylesCSSModules'

// Routes
//import Rutas from 'routes/routes';

// Pages
//import FormHooks from 'views/2-intermedio/forms-hooks/FormHookStringEnvio';
//import FormSuma from 'views/2-intermedio/forms-hooks/FormHookSuma';
//import CambiarEstado from 'views/2-intermedio/hooks/CambiarEstadoFelizContentoClasses';
//import ImagenesMicrosoft from 'views/1-basico/metodos-de-siclo-de-vida/ImagenesMicrosoft';

const App = () => {
    return (
        <div>
            <StylesCSSInLine />
            <StylesCSSInterno />
            <StylesCSSExterno />
            <StylesSASS />
            <StylesCSSModules />
        </div>
    )
}

export default App
