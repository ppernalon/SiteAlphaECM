import React from 'react';
import './styles/AssociationsPage.css';
import AlphaButtons from '../Components/AlphaButtons';

export default class AssociationsPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <AlphaButtons/>
            </div>
        )
    }
}