import React, { useState } from 'react';
import ControleLivros from './ControleLivros';
import ControleEditora from './ControleEditora';
import { useNavigate } from 'react-router-dom';

const LivroDados = () => {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const tratarCombo = 

    import React, { useState } from 'react';
    import ControleLivros from './ControleLivros';
    import ControleEditora from './ControleEditora';
    import { useNavigate } from 'react-router-dom';
    
    const LivroDados = () => {
        const controleLivro = new ControleLivros();
        const controleEditora = new ControleEditora();
        const navigate = useNavigate();
    
        const opcoes = controleEditora.getEditoras().map(editora => ({
            value: editora.codEditora,
            text: editora.nome
        }));
    
        const [titulo, setTitulo] = useState('');
        const [resumo, setResumo] = useState('');
        const [autores, setAutores] = useState('');
        const [codEditora, setCodEditora] = useState(opcoes[0].value);
    
        const tratarCombo = (event) => {
            setCodEditora(parseInt(event.target.value));
        };
    
        const incluir = (event) => {
            event.preventDefault();
            const novoLivro = {
                codigo: 0,
                titulo,
                resumo,
                autores: autores.split('\n'),
                codEditora
            };
            controleLivro.incluir(novoLivro);
            navigate('/');
        };
    
        return (
            <main>
                <h1>Cadastro de Livro</h1>
                <form onSubmit={incluir}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título:</label>
                        <input type="text" id="titulo" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resumo">Resumo:</label>
                        <textarea id="resumo" className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="autores">Autores:</label>
                        <textarea id="autores" className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="codEditora">Editora:</label>
                        <select id="codEditora" className="form-control" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </main>
        );
    };
    
    export default LivroDados;
    