
import React from 'react';

export default class ErrorBundary extends React.Component {
    state = {
        hasError: false
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }

}
