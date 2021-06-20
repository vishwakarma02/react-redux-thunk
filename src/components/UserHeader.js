import React from 'react';

import { fetchUser } from "../actions";
import { connect } from "react-redux";

class UserHeader extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.id);
    }


    render() {
        const { user } = this.props;
        if (!user) {
            return 'loading...'
        }
        return <div classname="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.id ) };
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);
