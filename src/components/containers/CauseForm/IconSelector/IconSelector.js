import React, { useState } from 'react';
import './IconSelector.css';

import { Glyphicon } from '@jgordy24/stalls-ui';

const icons = ['Africa', 'Airplane', 'Apple', 'Diaper', 'Envelope', 'Globe', 'Ornament'];

// TODO: Convert to functional component
const IconSelector = ({ handleSelect }) => {
    const [selected, setSelected] = useState(null);

    const renderIconTiles = () => {
        return icons.map((icon, i) => {
            const match = icon === selected;
            return (
                <div
                    className={'icon-tile' + (match ? ' selected' : '')}
                    key={i} onClick={() => selectIcon(icon)}
                >
                    {match ? (
                        <div className="overlay">
                            <Glyphicon
                                icon={'check-circle'}
                                size={'lg'}
                            />
                        </div>
                    ) : null}
                    <img src={returnIconUrl(icon)} alt={icon} />
                </div>
            );
        });
    };

    const returnIconUrl = (name) => {
        const url = require(`Assets/icons/PNG/${name}.png`);
        return url;
    };

    const selectIcon = (name) => {
        setSelected(name);
        handleSelect(name);
    };

    return (
        <div className="IconSelector">
            <div className="selector">

                <div className="button left">
                    <Glyphicon
                        icon={'chevron-left'}
                        size={'2x'}
                    />
                </div>

                <div className="slider">
                    <div
                        className="window"
                        style={{ gridTemplateColumns: `repeat(${icons.length}, 1fr` }}
                    >
                        {renderIconTiles()}
                    </div>
                </div>

                <div className="button right">
                    <Glyphicon
                        icon={'chevron-right'}
                        size={'2x'}
                    />
                </div>

            </div>
        </div>
    );
};

export default IconSelector;
