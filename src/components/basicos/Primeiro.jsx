import react from 'react'

//componente funcional: componente baseado em funcoes
export default function Primeiro() 
{
    const msg = 'mensage and welcome, in "h2" return Primeiro'
    const separacao = 'end first component ---------------------------------------------------'
    return (
        <div>
            <h2>first component, return of Primeiro</h2>
            <p> { msg } </p>
            <strong>
                <p> { separacao} </p>
            </strong>
        </div>
    )
}