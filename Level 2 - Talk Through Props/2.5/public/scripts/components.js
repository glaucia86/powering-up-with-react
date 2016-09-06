/* Componente - Caixa de Comentários */
class CommentBox extends React.Component {
    render() {
        return (
            <div className="comment-box">
                <h3>Comentários</h3>
                <h4 className="comment-count">2 Comentários</h4>
                <div className="comment-list">
                    <Comment author='Anne Droid' body='Eu quero saber o que é amor...' />
                </div>
            </div>
        );
    }
}

/* Componente - Comentários */
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