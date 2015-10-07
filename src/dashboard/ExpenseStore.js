import { ArrayStore, RESTApi } from 'praxis';

export default class ExpenseStore extends ArrayStore {
    constructor() {
        super();
        this.api = new RESTApi('http://demo8238158.mockable.io');
    }

    createExpense(action) {
        console.log(action.data);
        this._insert(action.data);
        this.emit('change');
    }

    // downloadNotes(action) {
    //     alert('alskdjfl');
    //     this.api.get('/notes').then((res) => {
    //         if (res.status == '200') {
    //             res.body.data.forEach((note) => {
    //                 this._insert(note);
    //             });
    //             this.emit('change');
    //         } else {
    //             this.emit('change_fail');
    //         }
    //     }).catch((err) => {
    //         this.emit('change_fail');
    //     });
    //     this.emit('pending_change');       
    // }
}