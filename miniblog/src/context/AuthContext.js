import {useContext, createContext} from 'react';

// Criamos a constante AuthContext e damos a ela o valor createContext, que
//é da biblioteca do react. Usaremos esse contexto para armazenar e compartilhar dados
//de autenticação em toda a aplicação.
const AuthContext = createContext()


// A seguir tempos uma função que recebe dois parâmetros: 'children' e 'value'
//Retorna um componente que envolve seus filhos usando o componente provider, to contexto
//de autenticação
export function AuthProvider({children, value}) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


// A função useAuthValue é uma função de hook que retorna
// o valor do contexto de autenticação usando o hook
// useContext da biblioteca react. Este hook permitirá
// que outros componentes na aplicação obtenham o valor 
// do contexto sem precisar passar o valor manualmente.
export function useAuthValue() {
    return useContext(AuthContext);
}