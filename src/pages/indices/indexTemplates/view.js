import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import Helmet from 'react-helmet';
import AntTabs from "~/components/AntTabs";
import Json2html from "~/components/Json2Html"

import {
    Box as MuiBox,
    Button as MuiButton,
    Card as MuiCard,
    CardContent,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider as MuiDivider,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextareaAutosize,
    TextField,
    Typography as MuiTypography
} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles';
import {palette, positions, spacing} from "@material-ui/system";
import {connect} from "react-redux";
import {setIndexTemplateAction, setIndexTemplatesAction, setIndexTemplateCommentsAction} from "../../../redux/actions/indexTemplateActions";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 250,
    },
    edit: {
        width: '100%',
        minHeight: '500px'
    },
}));

const Divider = styled(MuiDivider)(spacing);
const Box = styled(MuiBox)(spacing, positions);
const Card = styled(MuiCard)(spacing);
const Typography = styled(MuiTypography)(spacing, positions);
const Button = styled(MuiButton)(spacing, positions, palette);

const tabs = [{label: "매핑"}, {label: "셋팅"}]

let message = ""
function View({ dispatch, authUser, template, templates, comments}) {
    const history = useHistory()
    const classes = useStyles();
    const [selectedTemplate, setSelectedTemplate] = useState("")
    const [indexPatternText, setIndexPatternText] = useState("")

    const [tabIndex, setTabIndex] = useState(0)

    const [mappingMode, setMappingMode] = useState("form")
    const [settingMode, setSettingMode] = useState("form")

    const [detail, setDetail] = useState(false);
    const [mappingsJson, setMappingsJson] = useState("")
    const [settingsJson, setSettingsJson] = useState("")

    const [openMessage, setOpenMessage] = useState(false)

    useEffect(() => {
        if (selectedTemplate !== "") {
            dispatch(setIndexTemplateAction({template: selectedTemplate}))
            dispatch(setIndexTemplatesAction())
        } else {
            // eslint-disable-next-line no-restricted-globals
            setSelectedTemplate(location.pathname.substring(location.pathname.lastIndexOf("/") + 1))
        }
    }, [selectedTemplate]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setIndexPatternText((template['index_patterns'] || []).join(","))
    }, [template['index_patterns']]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setMappingsJson(JSON.stringify((template['mappings'] || {}), null, 4))
        // setMappingsJson(JSON.stringify(((template['mappings'] || {})['properties']), null, 4))

    }, [template['mappings']]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setSettingsJson(JSON.stringify(((template['settings'] || {})['index']), null, 4))
    }, [template['settings']]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch(setIndexTemplateCommentsAction())
    }, []) 
    
    function handleTemplateChange(template) {
        history.push(`../indices-templates/${template}`)
        setSelectedTemplate(template)
    }
    function handleTabChane(index) {
        setTabIndex(index)
    }

    return (
        <React.Fragment>
            <Helmet title="템플릿 조회"/>

            <Typography variant="h3"
                        gutterBottom
                        display="inline"
            >
                템플릿 조회
            </Typography>

            <Divider my={6}/>

            <Grid container>
                <Grid item xs={6}>
                    <Box align={'left'}>
                        <FormControl>
                            <InputLabel>템플릿</InputLabel>
                            <Select value={selectedTemplate}
                                    onChange={event => handleTemplateChange(event.target.value)}
                                    style={{minWidth: 250}}
                            >
                                {
                                    templates.map(template => template['name']).sort().map(name => <MenuItem key={name} value={name}>{name}</MenuItem>)
                                    // templates.map(template => <MenuItem key={template['name']} value={template['name']}>{template['name']}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    {
                        authUser.role.index ? 
                        <Box align={'right'}>
                            <Button variant="outlined"
                                color={"primary"}
                                onClick={() => history.push(`${selectedTemplate}/edit`)}
                            >수정</Button>
                            {/* <Button variant="outlined"
                                onClick={() => {
                                    history.goBack();
                                }}
                                ml={1}
                            >뒤로</Button> */}
                        </Box> :
                        <Box align={'right'}>
                            <Button variant="outlined"
                                    color={"primary"}
                                    disabled
                            >수정</Button>
                            {/* <Button variant="outlined"
                                onClick={() => {
                                    history.goBack();
                                }}
                                ml={1}
                            >뒤로</Button> */}
                        </Box>
                    }
                    
                </Grid>
            </Grid>

            <FormControl className={classes.formControl}>
                <TextField label="인덱스 패턴"
                           placeholder={"access-log-*,error-log-*"}
                           value={indexPatternText}
                           onChange={event => setIndexPatternText(event.target.value)}
                           disabled
                />
            </FormControl>

            <br/><br/>


            <AntTabs tabs={tabs}
                     tabIndex={tabIndex}
                     onChange={handleTabChane}
            />

            <Box display={tabIndex === 0 ? "block" : "none"} style={{marginTop: "20px"}}>
                {/* 맵핑 */}
                <FormControl component="fieldset">
                    <RadioGroup row onChange={event => setMappingMode(event.target.value)}>
                        <FormControlLabel value="form"
                                          checked={mappingMode === "form"}
                                          control={<Radio color="primary"/>}
                                          label="폼"
                        />
                        <FormControlLabel value="json"
                                          checked={mappingMode === "json"}
                                          control={<Radio color="primary"/>}
                                          label="json"
                        />
                    </RadioGroup>
                    {
                        mappingMode === 'form' ? 
                            <FormControlLabel value="상세보기"
                                onChange={(e) => {setDetail(e.target.checked)}}
                                checked={detail}
                                control={<Checkbox color="primary"/>}
                                label="상세보기"/> 
                            : <></>
                    }
                </FormControl>
                {
                    mappingMode === "form" ?
                        <Card>
                            <CardContent m={0}>
                                <Box style={{overflow: "auto", minWidth: "700px"}}>
                                    {Json2html({json: mappingsJson, type: "mappings", name:selectedTemplate, comments, dispatch, mode:"view", detail: detail})}
                                </Box>
                            </CardContent>
                        </Card>
                        :
                        <Card>
                            <CardContent>
                                <Box>
                                    <TextareaAutosize className={classes.edit}
                                                      value={mappingsJson}
                                                      onChange={event => setMappingsJson(event.target.value)}
                                                      autoFocus
                                                      disabled
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                }
            </Box>

            <Box display={tabIndex === 1 ? "block" : "none"} style={{marginTop: "20px"}}>
                {/* 설정 */}
                <FormControl component="fieldset">
                    <RadioGroup row onChange={event => setSettingMode(event.target.value)}>
                        <FormControlLabel value="form"
                                          checked={settingMode === "form"}
                                          control={<Radio color="primary"/>}
                                          label="폼"
                        />
                        <FormControlLabel value="json"
                                          checked={settingMode === "json"}
                                          control={<Radio color="primary"/>}
                                          label="json"
                        />
                    </RadioGroup>
                </FormControl>
                {
                    settingMode === "form" ?
                        <Card>
                            <CardContent m={0}>
                                {Json2html({json: template, type: "settings", name: selectedTemplate, comments:comments, dispatch})}
                            </CardContent>
                        </Card>
                        :
                        <Card>
                            <CardContent>
                                <Box>
                                    <TextareaAutosize className={classes.edit}
                                                      value={settingsJson}
                                                      onChange={event => setSettingsJson(event.target.value)}
                                                      disabled
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                }
            </Box>

            <Dialog open={openMessage}
                    fullWidth={true}>
                <DialogTitle>오류</DialogTitle>
                <DialogContent>
                    {message}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setOpenMessage(false)}>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default connect(store => ({
    authUser: store.dsearchReducers.authUser,
    ...store.indexTemplateReducers
}))(View);