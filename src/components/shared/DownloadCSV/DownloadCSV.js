import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import './DownloadCSV.css';

import {
    FontAwesome,
} from 'components/shared';

const DownloadCSV = ({
    buttonText,
    className,
    csvData,
    filename,
    headers,
}) => {
    // console.warn("CSV Data: ", csvData);

    return (
        <Fragment>
            <CSVLink
                className={`csv-download ${className}`}
                filename={`${filename.split(' ').join('-').toLowerCase()}.csv`}
                data={csvData}
                headers={headers && headers}
                target="_blank"
            >
                <FontAwesome icon={'download'} />
                {buttonText}
            </CSVLink>
        </Fragment>
    );
};

DownloadCSV.propTypes = {
    /**
     * The classname to apply to the root node
     */
    className: PropTypes.string,
    /**
     * The text to render at the root nodes
     */
    buttonText: PropTypes.string.isRequired,
    /**
     * The name to apply to the downloaded file.
     * Component will append the .csv extension automatically, no need to specify that when passing this string
     */
    filename: PropTypes.string.isRequired,
    /**
     * The column headers to be provided in the csv form.
     * If not provided the component pulls them from the objects keys
     */
    headers: PropTypes.array,
    /**
     * The data to be downloaded in an array format
     */
    csvData: PropTypes.array.isRequired,
};

DownloadCSV.defaultProps = {
    buttonText: 'Download',
    className: '',
};

export default DownloadCSV;