import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Result extends Component {
    
    render() {
        return (
            <div>
                <p>{this.props.result}</p>
                
            </div>
        );
    }
}
Result.propTypes = {
    result: PropTypes.string
}
export default Result;