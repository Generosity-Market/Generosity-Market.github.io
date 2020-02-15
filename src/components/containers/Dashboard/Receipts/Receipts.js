import React from 'react';
import { connect } from 'react-redux';
import './Receipts.css';

import {
    causeSelected,
} from 'ducks/cause';

// Shared UI Components
import {
    Heading,
    ReceiptItem,
} from 'components/shared';

export const Receipts = ({
    causeSelected,
    supportedCauses,
}) => {
    const causes = supportedCauses && supportedCauses.map(cause => {
        return (
            <ReceiptItem
                key={cause.icon + cause.name}
                selectCause={causeSelected}
                cause={cause}
            />
        );
    });

    return (
        <div className="Receipts">
            <Heading text={'Causes I Support'} />
            {causes}
        </div>
    );
};

const mapStateToProps = ({ cause }) => {
    const { causeList } = cause;

    return {
        causeList
    };
};

const mapDispatchToProps = {
    causeSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipts);
