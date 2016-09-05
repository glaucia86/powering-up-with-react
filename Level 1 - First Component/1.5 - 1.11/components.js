/* Criação do Primeiro Componente */
class RobotBox extends React.Component {
    render() {
        const pi = Math.PI;
        const topics = ["React", "JSX", "JavaScript", "Programação"];
        return (
            <div>
                <h3>Me chamo McCircuit</h3>
                <p>Estou aqui para te ajudar!!</p>
                    <div className='is-tasty-pie'>
                        O valor aproximado de PI é: {pi}
                    </div>
                    <h3>Tópicos que estou interessado</h3>
                    /* Aqui estou listando de maneira dinâmica, ao usar o método map() */
                    <ul>
                        { topics.map( top => <li>{top}</li>) }
                    </ul>
            </div>
        );
    }
}

/* Aqui iremos renderizar o nosso component para a página HTML - Virtual DOM */
let target = document.getElementById('robot-app');

ReactDOM.render( <RobotBox />, target);