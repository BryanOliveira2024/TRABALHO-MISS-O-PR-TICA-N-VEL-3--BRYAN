// Livro.ts

class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}

export default Livro;

npm install react-router-dom
import React from 'react';

const LivroDados = () => {
    return (
        <main>
            <h1>Olá mundo</h1>
        </main>
    );
};

export default LivroDados;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Lista de Livros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dados">Dados do Livro</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<LivroLista />} />
                    <Route path="/dados" element={<LivroDados />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
