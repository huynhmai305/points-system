import React, { Component } from 'react';

class Comment extends Component {
    render() {
        const { name, message, time } = this.props.comment
        return (
            <div className="media mb-3">
                <img
                    className="mb-3 bg-light rounded"
                    width="48"
                    height="48"
                    src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
                    alt={name}
                />
                <div className="media-body p-2 shadow-sm rounded bg-light border">
                    <small className="float-right text-muted">{time}</small>
                    <h6 className="mt-0 mb-1 text-muted">{name}</h6>
                    {message}
                </div>
            </div>
        );
    }
}

export default Comment;