// ControleEditora.ts

import Editora from "./Editora";

// Definindo a variável editoras com pelo menos três elementos no formato JSON
const editoras: Array<Editora> = [
    new Editora(1, "Editora A"),
    new Editora(2, "Editora B"),
    new Editora(3, "Editora C")
];

class ControleEditora {
    // Método para retornar todas as editoras
    getEditoras(): Array<Editora> {
        return editoras;
    }

    // Método para retornar o nome da editora com base no código da editora
    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}

export default ControleEditora;
