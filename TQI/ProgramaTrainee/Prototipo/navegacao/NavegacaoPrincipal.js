import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../telas/Home';
import TelaCalculo from '../telas/TelaCalculo';
import TelaCadastro from '../telas/TelaCadastro';
import TelaResultadoProposta from '../telas/TelaResultadoProposta';
import TelaPropostas from '../telas/TelaPropostas';

const NavegacaoTelas = createStackNavigator(

    {
        TelaHome: Home,
        TelaCalculo: TelaCalculo,
        TelaCadastro: TelaCadastro,
        TelaResultadoProposta: TelaResultadoProposta,
        TelaPropostas: TelaPropostas

        




    }
);

export default createAppContainer(NavegacaoTelas);