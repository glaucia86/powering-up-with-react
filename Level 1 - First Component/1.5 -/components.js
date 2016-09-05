/* Criação do Primeiro Componente */
class RobotBox extends React.Component {
    render() {
        return (
            <div>
                <h3>Me chamo McCircuit</h3>
                <p>Estou aqui para te ajudar!!</p>
            </div>
        );
    }
}

/* Aqui iremos renderizar o nosso component para a página HTML - Virtual DOM */
let target = document.getElementById('robot-app');

ReactDOM.render( <RobotBox />, target);