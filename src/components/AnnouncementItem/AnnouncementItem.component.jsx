import React from 'react';

// styled components
import { SmallBox } from '../../styled-components/SmallBox.styles';
import { Date } from '../../styled-components/Date.styles';

function AnnouncementItem({id, text, date}) {
    return (
        <SmallBox>
            {text}
            <Date>
                {date}
            </Date>
        </SmallBox>
    )
}

export default AnnouncementItem;