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
    this.props.getOrgData();
  }

  render() {
    const { organization, causeSelected } = this.props;
    const { 
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
    } = organization;

    console.log("ORG: ", organization.Preferences);

    return(
      <div className="Organization">

      {organization &&
        <Banner
          heading={name}
          BGimage={Utils.getImageURL(backgroundImage)}
          mainImage={Utils.getImageURL(mainImage)}
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
