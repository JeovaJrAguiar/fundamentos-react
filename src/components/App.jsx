import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default function App()
{
    return (
        <div id = 'app'>
        
            <h1><strong>Page Course React and Redux</strong></h1>

            <Fragmento></Fragmento>
            
            <ComParametro 
                titulo = 'Situação do Aluno'
                aluno = 'Pedro ' 
                nota = {9.3}
                /> 

            <Primeiro></Primeiro>
        </div>
    )
}