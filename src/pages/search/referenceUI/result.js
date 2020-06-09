import React, {useState} from "react";
import {connect, useDispatch, useSelector, useStore} from "react-redux";
import styled from "styled-components";
import Helmet from 'react-helmet';
import {
    Box as MuiBox,
    Button as MuiButton,
    Divider as MuiDivider,
    Grid as MuiGrid,
    Typography as MuiTypography,
    Card as MuiCard,
    CardContent as MuiCardContent,
    Hidden,
    List as MuiList,
    ListItem as MuiListItem,
    Link
} from "@material-ui/core";

import * as Color from '@material-ui/core/colors';

import {borders, display, palette, sizing, spacing} from "@material-ui/system";

import AntTabs from "~/components/AntTabs"
import LazyLoadImage from "~/components/LazyLoadImage"
import {addReferenceResult} from "../../../redux/actions/referenceSearchActions";

const Box = styled(MuiBox)(spacing, palette, sizing, display, borders);
const Divider = styled(MuiDivider)(spacing, palette, sizing, display, borders);
const Grid = styled(MuiGrid)(spacing, palette, sizing, display, borders);
const Typography = styled(MuiTypography)(spacing, palette, sizing, display, borders);
const Button = styled(MuiButton)(spacing, palette, sizing, display, borders);
const Card = styled(MuiCard)(spacing, palette, sizing, display, borders);
const CardContent = styled(MuiCardContent)(spacing, palette, sizing, display, borders);
const List = styled(MuiList)(spacing, palette, sizing, display, borders);
const ListItem = styled(MuiListItem)(spacing, palette, sizing, display, borders);

function SearchPanel(documents, aggregations, template, pagination) {
    const dispatch = useDispatch()
    const [disabledAppendButton, setDisabledAppendButton] = useState(false)

    function appendResult() {
        setDisabledAppendButton(true)
        window.scrollTo(0, 0)
        dispatch(addReferenceResult(pagination.id, pagination))
            .then(() => setDisabledAppendButton(false))
    }

    function replacePatternForSource(source, pattern) {
        const regExp = /(?<=\$\{).*?(?=\})/g;
        const patternList = String(pattern).match(regExp)
        let replaceStr = pattern.toString()
        if (patternList !== null) {
            replaceStr = replaceStr.replace('${keyword}', template['keyword'])
            patternList.forEach(pattern => {
                replaceStr = replaceStr.replace('${' + pattern + '}', source[pattern])
            })
        }
        return replaceStr
    }

    let Total = pagination ?
        (
            <Box ml={2} mt={2}>
                {`총 갯수: ${pagination.totalCount}`}
            </Box>
        )
        : null

    return (
        <React.Fragment>

            <Grid container>
                <Grid item xs={12}>
                    {Total}
                </Grid>
                <Grid item xs={12} md={8} lg={9}>

                    <List p={0} pt={4}>

                        {
                            documents.map((data, index) => {
                                const documentMap = data['sourceAsMap']
                                const title = replacePatternForSource(documentMap, String(template['title']))
                                const thumbnails = replacePatternForSource(documentMap, String(template['thumbnails']))
                                const clickUrl = replacePatternForSource(documentMap, String(template['clickUrl']))

                                return (
                                    <ListItem key={index} py={2} pl={0}>
                                        <Card style={{width: "100%"}}>
                                            <CardContent>
                                                <Box style={{width: "100%"}}>
                                                    <Grid container>
                                                        <Grid item xs={4}>
                                                            <Box align={"center"}
                                                                 style={{width: "100%", minWidth: '100%'}} py={2}
                                                                 px={5}>
                                                                <LazyLoadImage image={{
                                                                    src: thumbnails,
                                                                    alt: "no image",
                                                                    width: "100%",
                                                                    maxWidth: "130px"
                                                                }}/>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Box style={{width: '100%'}}>
                                                                <Box px={3} py={2} style={{
                                                                    backgroundColor: Color.blueGrey['200'],
                                                                    borderRadius: '5px'
                                                                }}>
                                                                    <a href={clickUrl} target="_blank">
                                                                        <Typography variant={"h5"} display={"inline"}>
                                                                            <div dangerouslySetInnerHTML={{__html: title}}></div>
                                                                        </Typography>
                                                                    </a>
                                                                </Box>
                                                                <Box px={4} pt={3}>
                                                                    <List>
                                                                        {template['fields'].map((field, index) => {
                                                                            const label = field['label']
                                                                            const value = replacePatternForSource(documentMap, String(field['value']))
                                                                            return (
                                                                                <ListItem p={1} key={index}>
                                                                                    <Box whiteSpace="nowrap">
                                                                                        <div dangerouslySetInnerHTML={{__html: label}}></div>
                                                                                    </Box>
                                                                                    :
                                                                                    <Box ml={2}>
                                                                                        <div dangerouslySetInnerHTML={{__html: value}}></div>
                                                                                    </Box>
                                                                                </ListItem>
                                                                            )
                                                                        })}
                                                                    </List>
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </ListItem>
                                )
                            })
                        }

                    </List>
                </Grid>

                <Grid item xs={12} md={4} lg={3} mt={2}>

                    {
                        template['aggs'].map((aggs, index) => {
                            const label = aggs['label']
                            const value = aggs['value']
                            return (
                                <Card key={index} mt={4} pl={2} style={{backgroundColor: Color.blueGrey['100'], width: '100%'}}>
                                    <CardContent>
                                        <Box>
                                            <Typography variant="h5" mt={1}> {label} </Typography>
                                            <List>
                                                {
                                                    ((aggregations[value] || {})['buckets'] || []).map((bucket, index) => {
                                                        return (
                                                            <ListItem key={index} p={1}>
                                                                <Box component={"span"}>
                                                                    - {bucket['key']}
                                                                </Box>
                                                                <Box component={"span"} ml={2}>
                                                                    {bucket['docCount']}
                                                                </Box>
                                                            </ListItem>
                                                        )
                                                    })
                                                }
                                            </List>
                                        </Box>
                                    </CardContent>
                                </Card>


                            )
                        })
                    }
                    {/*<Card mt={4} pl={2} style={{backgroundColor: Color.blueGrey['100'], width: '100%'}}>*/}
                    {/*    <CardContent>*/}
                    {/*        <Box>*/}
                    {/*            <Typography  variant="h5" mt={1}> 제조사 </Typography>*/}
                    {/*            <List>*/}
                    {/*                <ListItem p={1}>*/}
                    {/*                    <Box component={"span"}>*/}
                    {/*                        - 사조대림*/}
                    {/*                    </Box>*/}
                    {/*                    <Box component={"span"} ml={2}>*/}
                    {/*                        10*/}
                    {/*                    </Box>*/}
                    {/*                </ListItem>*/}
                    {/*                <ListItem p={1}>*/}
                    {/*                    <Box component={"span"}>*/}
                    {/*                        - 냠냠식품*/}
                    {/*                    </Box>*/}
                    {/*                    <Box component={"span"} ml={2}>*/}
                    {/*                        5*/}
                    {/*                    </Box>*/}
                    {/*                </ListItem>*/}
                    {/*                <ListItem p={1}>*/}
                    {/*                    <Box component={"span"}>*/}
                    {/*                        - 바잇미*/}
                    {/*                    </Box>*/}
                    {/*                    <Box component={"span"} ml={2}>*/}
                    {/*                        1*/}
                    {/*                    </Box>*/}
                    {/*                </ListItem>*/}
                    {/*                <ListItem p={1}>*/}
                    {/*                    <Box component={"span"}>*/}
                    {/*                        - 힐링펫*/}
                    {/*                    </Box>*/}
                    {/*                    <Box component={"span"} ml={2}>*/}
                    {/*                        1*/}
                    {/*                    </Box>*/}
                    {/*                </ListItem>*/}
                    {/*            </List>*/}
                    {/*        </Box>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}

                    {/*<Card mt={4} pl={2} style={{backgroundColor: Color.blueGrey['100'], width: '100%'}}>*/}
                    {/*    <CardContent>*/}
                    {/*        <Box>*/}
                    {/*            <Typography  variant="h5" mt={1}> 상품분류 </Typography>*/}
                    {/*            <List>*/}
                    {/*                <ListItem p={1}>*/}
                    {/*                    <Box component={"span"}>*/}
                    {/*                        - 닭고기*/}
                    {/*                    </Box>*/}
                    {/*                    <Box component={"span"} ml={2}>*/}
                    {/*                        10*/}
                    {/*                    </Box>*/}
                    {/*                </ListItem>*/}
                    {/*            </List>*/}
                    {/*        </Box>*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}


                </Grid>

                <Grid item xs={12}>
                    <Box align={"center"} mt={5}>
                        {
                            pagination && pagination.pageNum < pagination.lastPageNum ?
                                (
                                    <Button size={"large"}
                                            variant={"contained"}
                                            color={"primary"}
                                            onClick={appendResult}
                                            disabled={disabledAppendButton}
                                    >더보기</Button>
                                )
                                :
                                null
                        }
                    </Box>
                </Grid>
            </Grid>


        </React.Fragment>
    )
}

function Result({resultList}) {
    const keyword = useSelector(store => (store.referenceSearchReducers.keyword))

    const tabs = resultList.map(result => ({
        label: result['template']['name'] || "이름 없음",
        component: () => SearchPanel(
            result['documents']['hits'],
            result['documents']['aggregations'] || [],
            result['template'],
            {
                id: result['template']['id'],
                keyword: keyword,
                pageNum: Number(result['documents']['pageNum']) + 1,
                rowSize: result['documents']['rowSize'],
                totalCount: result['documents']['totalCount'],
                lastPageNum: result['documents']['lastPageNum'],
            })
    }))

    return (
        <React.Fragment>
            <Helmet title="검색결과"/>

            <Grid container>
                <Grid item xs={10}>
                    <Typography variant="h3" gutterBottom display="inline">
                        레퍼런스 UI
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Box align={"right"}>
                        <Button color={"default"} variant={"contained"}
                                onClick={() => location.href = '/search/reference-ui'}>설정</Button>
                    </Box>
                </Grid>
            </Grid>

            {tabs && tabs.length > 0 ? <Divider my={6}/> : null}

            <AntTabs tabs={tabs} tabIndex={0}/>


        </React.Fragment>
    )
}

export default connect(store => ({...store.referenceSearchReducers}))(Result)