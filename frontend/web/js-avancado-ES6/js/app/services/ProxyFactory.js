class ProxyFactory {
    static create(objeto, props, acao) {

        return new Proxy(objeto, {
            get: function (target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory.ehFuncao(target[prop])) {
                    return function () {
                        Reflect.apply(target[prop], target, arguments);
                        acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver) {
                if (props.includes(prop)) {
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static ehFuncao(func) {
        return typeof (func) == typeof (Function);
    }
}