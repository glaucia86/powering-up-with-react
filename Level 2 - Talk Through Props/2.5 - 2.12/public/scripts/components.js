/* Componente - Caixa de Comentários */
class CommentBox extends React.Component {
    render() {
        /* Aqui é para poder mostrar os comentários disponíveis */
        const comments = this._getComments() || [];
        return(
            <div className="comment-box">
                <h3>Comentários</h3>
                    { this._getPopularMessage(comments.length) } 
                <h4 className="comment-count">{comments.length} comentários</h4>
                <div className="comment-list">
                    {comments}
                </div>
            </div>
        );
    }

    /* Método para poder retornar o post mais popular enviado  */
    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;

        if(commentCount > POPULAR_COUNT) {
            return (
              <div>Este post é bastante popular! Fique por dentro desse post!!!</div>  
            );
        }
    }

    /* Método para poder retornar o array dos elementos do JSX */
    _getComments() {
        const commentList = [
            { id:1, author: 'Jake Luck', body: 'Simplesmente não curto!', avatarUrl:'images/avatar-default.png' },
            { id:2, author: 'Rob Droid', body:'Eu gostaria de saber o que é amor....', avatarUrl:'images/avatar-default.png' }
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
                <img src={ this.props.avatarUrl } alt={`${this.props.author} fotos`} />
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