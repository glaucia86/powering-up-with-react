/* Componente responsável pelos comentários realizados pelos usuários */
class Comment extends React.Component {
    /* Todas as vezes que usamos 'this.state' devemos usar o 
        'constructor() + super()' */
    constructor() {
        super();

        /* Caso algum determinado comentário do usuário for abusivo, os demais usuários poderão
            'desativar' o comentário. */
        this.state = {
            isAbusive: false
        };
    }

    render() {
        let commentBody;

        /* Aqui tratará a lógica para analisar se um determinado post
            é abusivo ou não. */
        if(!this.state.isAbusive) {
            commentBody = this.props.body
        } else {
            commentBody = <em>Post marcado como abusivo!</em>;
        }

        return (
            <div className="comment">
                <img src={ this.props.avatarUrl } alt={`${this.props.author} fotos`} />
                <p className="comment-header">
                    {this.props.author}
                </p>
                <p className="comment-body">
                    {commentBody}
                </p>
                <div className="comment-actions">
                    <a href="#">Excluir Comentário</a> 

                    <a href='#' onClick={this._toggleAbuse.bind(this)}>Reportar como Abusivo</a>
                </div>
            </div>
        );
    }

    /* Método responsável por remover o post abusivo (através do click) */
    _toggleAbuse(event) {
        event.preventDefault();

        this.setState({
            isAbusive: !this.state.isAbusive
        });
    }
}

/* Componente - Caixa de Comentários */
class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: [
                { id:1, author: 'Jake Luck', body: 'Simplesmente não curto!', avatarUrl:'images/avatar-default.png' },
                { id:2, author: 'Rob Droid', body:'Eu gostaria de saber o que é amor....', avatarUrl:'images/avatar-default.png' }
            ]
        };
    }

    render() {
        /* Aqui é para poder mostrar os comentários disponíveis */
        const comments = this._getComments();
        return(
            <div className="comment-box">
                <CommentForm addComment={this._addComment.bind(this)} />
                <h3>Comentários</h3>
                    { this._getPopularMessage(comments.length) } 
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
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
        return this.state.comments.map((comment) => {
            return (<Comment
                    author      = { comment.author }
                    body        = { comment.body }
                    avatarUrl   = { comment.avatarUrl } 
                    key         = { comment.id } />);
        });
    }

    /* Método para poder retornar a quantidade de comentários postados pelos usuários*/
    _getCommentsTitle(commentCount) {
        if(commentCount === 0) {
            return 'Sem comentários ainda...';
        } else if(commentCount === 1) {
            return '1 comentário';
        } else {
            return `${commentCount} comments`;
        }
    }

    /* Método responsável por adicionar comentários no formulário */
    _addComment(commentAuthor, commentBody) {
        let comment = {
            id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
            author: commentAuthor,
            body: commentBody
        };

        /* Aqui irei inserir o comentário que foi recém adicionado */
        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }
}

/* Componente responsável para adicionar comentários - Formulário */
class CommentForm extends React.Component {
    constructor() {
        super();

        this.state = {
            characters: 0
        };
    }

    render() {
        return( 
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Novo Comentário</label>
                <div className="comment-form-fields">
                    <input placeholder="Nome:" ref={c => this._author = c} />
                    <textarea placeholder="Comentário:" ref={c => this._body = c} onChange={this._getCharacterCount.bind(this)}></textarea>
                </div>
                <p>{this.state.characters} caracteres</p>
                <div className="comment-form-actions">
                    <button type="submit">Postar Comentário</button>
                </div>
            </form>
        );
    }

    /* Método responsável por contar a quantidade de caracteres digitados na 'textarea' */
    _getCharacterCount(e) {
        this.setState({
        characters: this._body.value.length
    });
  }

    /* Método responsável por enviar o comentário para o post e 'setar' os campos depois de enviado */
    _handleSubmit(event) {
        event.preventDefault();

        this.props.addComment(this._author.value, this._body.value);

        this._author.value  = '';
        this._body.value    = '';

        this.setState({ characters:0 });
    }
}   

let target = document.getElementById('comment-app');

ReactDOM.render( <CommentBox/>, target);