import { React, Dispatcher, Session, MenuBar } from 'praxis';
import menu from './menu';

class App extends React.Component {  
    constructor(props) {
        super(props);
        // TODO: register stores
    }

    render() {
        return (
            <div>
                <MenuBar items={menu} session={Session} />
                {this.props.children}
            </div>
        );
    }
}

export default App;