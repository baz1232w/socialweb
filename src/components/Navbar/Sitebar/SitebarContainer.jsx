import {connect} from "react-redux";
import SiteBar from "./Sitebar";


const mapStateToProps = (state) =>{
    return {
        friend: state.sidebar.friends
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {

    }
}

const SuperSiteBarContainer = connect(mapStateToProps,mapDispatchToProps)(SiteBar);

export default SuperSiteBarContainer;