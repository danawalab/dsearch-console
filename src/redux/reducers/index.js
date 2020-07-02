import {combineReducers} from 'redux';
// Reducer importing..
import indicesReducers from "./indicesReducers";
import dictionaryReducers from "./dictionaryReducers";
import clusterReducers from "./clusterReducers";
import indicesMappingReducers from "./indicesMappingReducers";
import serverSummaryReducers from "./serverSummaryReducers";
import apiManagementReducers from "./apiManagementReducers";
import clusterInfoReducers from "./clusterInfoReducers";
import indicesIndexDataReducers from "./indicesIndexDataReducers";
import dashBoardReducers from "./dashBoardReducers";
import referenceSearchReducers from "./referenceSearchReducers";
import indexTemplateReducers from "./indexTemplateReducers";
import fastcatxReducers from "./fastcatxReducers";
import roleManagementReducers from "./roleManagementReducers";
import userManagementReducers from "./userManagementReducers";
import clusterSettingsReducers from "./clusterSettingsReducers";

export default combineReducers({
    indicesReducers,
    dictionaryReducers,
    clusterReducers,
    indicesMappingReducers,
    serverSummaryReducers,
    apiManagementReducers,
    clusterInfoReducers,
    indicesIndexDataReducers,
    dashBoardReducers,
    referenceSearchReducers,
    indexTemplateReducers,
    fastcatxReducers,
    roleManagementReducers,
    userManagementReducers,
    clusterSettingsReducers,
});
