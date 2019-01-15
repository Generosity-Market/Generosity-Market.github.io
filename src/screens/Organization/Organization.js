import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrgData, getCauseList, causeSelected } from '../../actions/actions';
import Utils from '../../utilities/utilities';
import './organization.css';

// Component imports
import Banner from '../../components/Banner/Banner';
import OrgDetails from './components/OrgDetails/OrgDetails';
import OrgCauses from './components/OrgCauses/OrgCauses';
import LinkButton from '../../components/LinkButton/LinkButton';

class Organization extends Component {

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

    return(
      <div className="Organization">

        {organization &&
          <Banner
            heading={name}
            BGimage={backgroundImage && Utils.getImageURL(backgroundImage)}
            mainImage={mainImage && Utils.getImageURL(mainImage)}
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
};

const mapStateToProps = (state) => {
  return {
    organization: state.selectedOrg
  };
};

const mapDispatchToProps = { getOrgData, getCauseList, causeSelected };

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
