import {connect} from 'react-redux';
import SettingsPanel from '../components/SettingsPanel';


const mapStateToProps = (store) => {
      return {
            username: store.picasaSettings.username,
            imageSize: store.picasaSettings.imageSize,
      }
}

const mapDispatchToProps = (dispatch)=>{
      return {

      }
}

export default connect()(SettingsPanel);