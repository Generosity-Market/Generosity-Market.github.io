import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from 'ducks/cause';
import { getOrgData } from 'ducks/organization';
import './organization.css';

import {
    getImageUrl,
} from 'utilities';

// Shared UI Components
import {
    Banner,
    LinkButton,
} from 'components/shared';

// Organization Page UI Components
import {
    OrgCauses,
    OrgDetails,
} from 'components/containers/Organization';

export class Organization extends Component {

    componentDidMount() {
        this.props.getOrgData(2); // TODO this id needs to come from the url param...
    }

    render() {
        const {
            causeSelected,
            organization,
            organization: {
                name,
                backgroundImage,
                mainImage,
                Preferences,
                Causes,
                heading,
                mission,
                email,
                site_url,
                short_name,
            }
        } = this.props;

        return (
            <div className="Organization">

                {organization &&
                    <Banner
                        heading={name}
                        BGimage={backgroundImage && getImageUrl(backgroundImage)}
                        mainImage={mainImage && getImageUrl(mainImage)}
                        roundImage={Preferences[0] ? Preferences[0].roundImage : false}
                    />
                }

                <div className="Wrapper">

                    {organization &&
                        <OrgCauses
                            causes={Causes}
                            causeSelected={causeSelected}
                        />
                    }

                    <OrgDetails
                        heading={heading}
                        mission={mission}
                        email={email}
                    />

                    <LinkButton
                        href={site_url}
                        classname={'org-link'}
                        linkText={`Visit ${short_name}`}
                    />

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        organization: { selectedOrg },
    } = state;

    return {
        organization: selectedOrg,
    };
};

const mapDispatchToProps = { getOrgData, getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
