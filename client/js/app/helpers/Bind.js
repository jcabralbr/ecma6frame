class Bind {

    constructor(model, view, props){
        let proxy = ProxyFactory.create(model, props, model =>
            view.update(model));
        if (view){
            view.update(model);
        }

        return proxy;

    }

}
