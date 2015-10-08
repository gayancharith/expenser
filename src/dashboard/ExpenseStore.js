import { ArrayStore, RESTApi } from 'praxis';

export default class ExpenseStore extends ArrayStore {
    constructor() {
        super();
        this.api = new RESTApi('http://demo8238158.mockable.io');
    }

    createExpense(action) {
        console.log('actino is called');
        console.log(action.data);
        this._insert(action.data);
        this.emit('change');
    }
}