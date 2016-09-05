/* Criação do Componente */
class Comments extends React.Component {
    render() {
        return (
            <div className="comment">
                <p className="comment-header">
                    {this.props.author}
                </p>
                <p className="comment-body">
                    {this.props.body}
                </p>
                <div className="comment-actions">
                    <a href="#">Excluir Comentário</a>
                </div>
            </div>
        );
    }
}

let target = document.getElementById('comment-app');

ReactDOM.render( <Comments/>, target);