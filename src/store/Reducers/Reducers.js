import { combineReducers } from 'redux';

// Reducers
import { LoggedInUserReducer } from './LoggedInUserReducer';
import { StaffCategoryReducer } from './StaffCategory';
import { StaffReducer } from './StaffReducer';
import { SomeStuffReducer } from './SomeStuff';
import { AnnouncementReducer } from './AnnouncementReducer';
import { DashboardMenuItemsReducer } from './DashboardMenuItemsReducer';
import { FriendlyMatchTeamsReducer } from './FriendlyMatchTeamsReducer';
import { GameStatisticsReducer } from './GameStatisticsReducer';
import { ResourcesReducer } from './ResourcesReducer';
import { RulesReducer } from './RulesReducer';
import { ScientificEducationsReducer } from './ScientificEducationsReducer';
import { TeamsReducer } from './TeamsReducer';
import { TechnicalEducationsReducer } from './TechnicalEducationsReducer';
import { ChallengesReducer } from './ChallengesReducer'


export default combineReducers({
    USER : LoggedInUserReducer,
    STAFF: StaffReducer,
    CATEGORY_TYPE: StaffCategoryReducer,
    MENU_ITEMS: DashboardMenuItemsReducer,
    SomeStuff: SomeStuffReducer,
    Announcements: AnnouncementReducer,
    GameStatistics: GameStatisticsReducer,
    Rules: RulesReducer,
    Resources: ResourcesReducer,
    TechnicalEducations: TechnicalEducationsReducer,
    ScientificEducations: ScientificEducationsReducer,
    Teams: TeamsReducer,
    FriendTeams: FriendlyMatchTeamsReducer, 
    Challenges: ChallengesReducer
})