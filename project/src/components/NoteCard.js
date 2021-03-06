import React, {Component} from 'react'
import NoteText from './NoteText'

class NoteCard extends Component {
    constructor(props){
        super(props)
    }
    render(){console.log(this.key)
        return(
            <div className = "note-card a">
                <h2 className = "card-title">{this.props.title}</h2>
                <NoteText text= {this.props.content} />
            </div>
        )
    }
}

export default NoteCard