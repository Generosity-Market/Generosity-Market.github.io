import React, { Component } from 'react';
import './IconSelector.css';

import { Glyphicon } from '@jgordy24/stalls-ui';

// TODO: Convert to functional component
class IconSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
        };

        this.renderIconTiles = this.renderIconTiles.bind(this);

        this.icons = ['Africa', 'Airplane', 'Apple', 'Diaper', 'Envelope', 'Globe', 'Ornament'];
    }

    renderIconTiles() {
        return this.icons.map((icon, i) => {
            const match = icon === this.state.selected;
            return (
                <div
                    className={'icon-tile' + (match ? ' selected' : '')}
                    key={i} onClick={this.selectIcon.bind(this, icon)}
                >
                    {match ? (
                        <div className="overlay">
                            <Glyphicon
                                icon={'check-circle'}
                                size={'lg'}
                            />
                        </div>
                    ) : null}
                    <img src={this.returnIconUrl(icon)} alt={icon} />
                </div>
            );
        });
    }

    returnIconUrl(name) {
        const url = require(`Assets/icons/PNG/${name}.png`);
        return url;
    }

    selectIcon(name) {
        this.setState({ selected: name });
        this.props.handleSelect(name);
    }

    render() {
        return (
            <div className="IconSelector">
                <div className="selector">

                    <div className="button left" onClick={this.decreaseViewIndex}>
                        <Glyphicon
                            icon={'chevron-left'}
                            size={'2x'}
                        />
                    </div>

                    <div className="slider">
                        <div
                            className="window"
                            style={{ gridTemplateColumns: `repeat(${this.icons.length}, 1fr` }}
                        >
                            {this.renderIconTiles()}
                        </div>
                    </div>

                    <div className="button right" onClick={this.increaseViewIndex}>
                        <Glyphicon
                            icon={'chevron-right'}
                            size={'2x'}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

export default IconSelector;
