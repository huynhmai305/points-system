import React, { Component } from 'react';
import Comment from './Comment';
import {Badge, Alert} from 'reactstrap';

class CommentList extends Component {
    render() {
        return (
            <div className="commentList">
                <h5 className="text-muted md-4">
                    <Badge color="success">
                        {this.props.comments.length}
                    </Badge>{" "}
                    Comment{this.props.comments.length > 0 ? "s" : ""}
                </h5>
                {this.props.comments.length === 0 && !this.props.loading ? (
                    <Alert color="info" className="text-center">
                        Be the first to comment
                    </Alert>
                ) : null}
                {this.props.comments.map((comment, key) => (
                    <Comment key={key} comment={comment}/>
                ))}
            </div>
        );
    }
}

export default CommentList;