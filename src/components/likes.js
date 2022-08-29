import { connect } from 'react-redux'

function Like(props) {
    console.log(props)
    return (
        <div className="button-controls">
            <button>❤ {props.like}</button>
            <button>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("mapStateToProps> ", state)
    return {
        like: state.like
    }
}

export default connect(mapStateToProps)(Like)