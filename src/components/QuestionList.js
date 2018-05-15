import React, { Component } from 'react'
import QuestionListItem from './QuestionListItem'

class QuestionList extends Component{
    render() {
        const { questionKeys } = this.props

        return (
            <div>
                {questionKeys.map((questionKey) => {return(
                    <div key={questionKey} className='border question-list-item'>
                        <QuestionListItem questionKey={questionKey}/>
                    </div>
                )})}
            </div>
        )
    }
}

export default QuestionList