import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
CRUD (Create, Read (Single & All), Update, Delete)

Create -> Formulário de criação
Read All -> Listagem de itens cadastrados
Read Single -> Visualização de um item específico
Update -> Formulário de edição
Delete -> Remover um item específico
*/

// Read All
// Precisa dos dados que serão exibidos
// A estrutura desses dados precisa possuir 'Nome' e 'URL da Imagem'

// Decidam qual será o tema da sua aplicação
// O meu será de Raças de Cachorro

const lista = [
    {
        id: 1,
        nome: "Golden Retriever",
        imagemUrl:
            "https://f.i.uol.com.br/fotografia/2017/10/27/150912457859f369e28eaa5_1509124578_3x2_md.jpg",
    },
    {
        id: 2,
        nome: "Labrador",
        imagemUrl:
            "https://www.clubeparacachorros.com.br/wp-content/uploads/2014/07/labrador-amarelo.jpg",
    },
];

function Item(props) {
    const indice = props.indice;

    const item = lista[indice];

    return (
        <div className="item">
            {item.nome}
            <br />
            <img src={item.imagemUrl} alt={item.nome} width="200" />
        </div>
    );
}

function Lista() {
    return (
        <div className="lista">
            {lista.map((item, index) => (
                <Item indice={index} key={index} />
            ))}
        </div>
    );
}

function Header() {
    return (
        <div className="header">
            <img
                src="https://www.oceanbrasil.com/img/general/logoOceanI.png"
                alt="Samsung Ocean"
                width="300"
            />
        </div>
    );
}

function Footer() {
    return <div className="footer">Footer</div>;
}

function App() {
    return (
        <div className="app">
            <Header />
            <Lista />
            <Footer />
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
