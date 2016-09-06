/* Componente - Caixa de Comentários */
class CommentBox extends React.Component {
    render() {
        /* Aqui é para poder mostrar os comentários disponíveis */
        const comments = this._getComments() || [];
        return(
            <div className="comment-box">
                <h3>Comentários</h3>
                <h4 className="comment-count">{comments.length} comentários</h4>
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        );
    }

    /* Método para para retornar o array dos elementos do JSX */
    _getComments() {
        const commentList = [
            { id:1, author: 'Jake Luc', body: 'Simplesmente não curto!', avatarUrl:'images/default-avatar.png' },
            { id:2, author: 'Rod Droid', body:'Eu gostaria de saber o que é amor....', avatarUrl:'images/default-avatar.png' }
        ];

        return commentList.map((comment) => {
            return (<Comment
                    author      = { comment.author }
                    body        = { comment.body }
                    avatarUrl   = { comment.avatarUrl } 
                    key         = { comment.id } />);
        });
    }
}

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">{this.props.body}</p>
                <div className="comment=actions">
                    <a href="#">Excluir Comentário</a>
                </div>
            </div>
        );
    }
}

let target = document.getElementById('comment-app');

ReactDOM.render( <CommentBox/>, target);