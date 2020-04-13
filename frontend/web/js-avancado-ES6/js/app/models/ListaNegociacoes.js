class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
        //  this._trap = trap;
        //  this._context = context;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //  Reflect.apply(this._trap, this._context, [this]);
        //  this._trap(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        //  Reflect.apply(this._trap, this._context, [this]);
        //  this._trap(this);
    }
}