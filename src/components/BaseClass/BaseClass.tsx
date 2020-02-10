import React from 'react';
import PropTypes from 'prop-types';

class BaseClass extends React.Component {
    static propTypes: { foo: PropTypes.Requireable<any>; };
    constructor(props: any, context: any) {
        super(props, context);
        this.bar = this.bar.bind(this);
    }

    foo = () => { }
    bar() { }

    render() {
        return <div>BaseClass</div>;
    }
}

BaseClass.propTypes = {
    foo: PropTypes.any,
}

export default BaseClass;