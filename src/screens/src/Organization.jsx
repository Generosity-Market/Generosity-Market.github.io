import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCauseList, causeSelected } from 'ducks/cause';
import { getOrgData } from 'ducks/organization';
import '../styles/Organization.css';

import {
    getImageUrl,
} from 'utilities';

// Shared UI Components
import {
    Button,
    // HeroSection,
} from '@jgordy24/stalls-ui';
import { Banner } from 'components/shared';

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
                cover_image,
                profile_image,
                Preferences,
                Causes,
                heading,
                mission,
                email,
                site_url,
                display_name,
            }
        } = this.props;

        return (
            <div className="Organization">

                {organization &&
                    <Banner
                        heading={name}
                        BGimage={cover_image && getImageUrl(cover_image)}
                        profile_image={profile_image && getImageUrl(profile_image)}
                        round_image={Preferences[0] ? Preferences[0].round_image : false}
                    />
                }

                {/* organization &&
                    <HeroSection
                        heading={name}
                        coverImgSrc={cover_image && getImageUrl(cover_image)}
                        profileImgSrc={profile_image && getImageUrl(profile_image)}
                        roundedProfile={Preferences[0] ? Preferences[0].round_image : false}
                    >
                        <h1>{name}</h1>
                    </HeroSection>
                */}

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

                    <Button
                        bsStyle='active'
                        bsSize='full'
                        href={site_url}
                        label={`Visit ${display_name}`}
                    />

                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ organization }) => {
    const { selectedOrg } = organization;

    return {
        organization: selectedOrg,
    };
};

const mapDispatchToProps = { getOrgData, getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
