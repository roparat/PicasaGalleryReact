import {connect} from 'react-redux';
import SettingsPanel from '../components/SettingsPanel';


const mapStateToProps = (store) => {
      return {
            username: store.picasaSettings.username,
            imageSize: store.picasaSettings.imageSize,
      }
}

export default connect(mapStateToProps)(SettingsPanel);