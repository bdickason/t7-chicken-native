// components
import About from './About/';
import Help from './Help/';
import InitialLoading from './InitialLoading/';
import CharacterSelect from './CharacterSelect/';
import CharacterProfile from './CharacterProfile/';

const MainRoutes = {
  characterSelect: { screen: CharacterSelect },
  characterProfile: { screen: CharacterProfile },
	initialLoading: { screen: InitialLoading }
};

const AboutRoute = {
  about: { screen: About }
};

const HelpRoute = {
  help: { screen: Help }
};

export default { MainRoutes, AboutRoute, HelpRoute };
