import {selectVisibleMenuResourceTreeTable} from './selector';
import {Component} from 'react';
import {connect} from 'react-redux';

class AuthWidget extends Component {
    render() {
        if (this.props.compAuth && this.props.compAuth.data) {
            return this.props.children(this.props.compAuth.data);
        }

        return this.props.children({});
    }
}

const mapStateToProps = state => {
    return {
        compAuth: selectVisibleMenuResourceTreeTable(state)
    }
};

export default connect(mapStateToProps)(AuthWidget);
