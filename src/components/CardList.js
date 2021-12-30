import React from 'react';
import './CardList.css';

class CardList extends React.Component {

    getEachListItem() {
        let arr = this.props.info.split(',');
        return arr.map((e) => {
            return <li key={e}>{e}</li>
        });
    }

    render() {

        return (
            <div className='card'>
                <div className='contents'>
                    <div className='front'>
                        <h1>{this.props.topic}</h1>
                    </div>
                    <div className='back'>
                        <ul>{this.getEachListItem()}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardList;