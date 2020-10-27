import React from "react";
import {
    Box,
    Button as MuiButton,
    Card as MuiCard,
    CardContent,
    Checkbox,
    Divider as MuiDivider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography as MuiTypography
} from "@material-ui/core";
import flat from "flat";
import styled from "styled-components";
import {palette, positions, spacing} from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);
const Card = styled(MuiCard)(spacing);
const Typography = styled(MuiTypography)(spacing, positions);
const Button = styled(MuiButton)(spacing, positions, palette);

function SettingsJson2html(settings) {
    if (!settings) {
        return null
    }

    const flatSettingsMap = flat(settings['settings'] ? settings['settings'] : settings)
    return (
        <React.Fragment>
            <Card>
                <CardContent>
                    <Typography variant={"h5"} mt={5}>
                        주요항목
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>샤드 갯수</TableCell>
                                <TableCell>레플리카 갯수</TableCell>
                                <TableCell>리프레쉬 간격</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{(((settings['settings']||{})['index']||{})['number_of_shards']|| '-')}</TableCell>
                                <TableCell>{(((settings['settings']||{})['index']||{})['number_of_replicas']|| '-')}</TableCell>
                                <TableCell>{(((settings['defaults']||{})['index']||{})['refresh_interval']|| '-')}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <br/>
            <Card>
                <CardContent>
                    <Typography variant={"h5"} mt={5}>
                        기타항목
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>키</TableCell>
                                <TableCell>값</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Object.keys(flatSettingsMap||{}).map(key => {
                                    return (
                                        <TableRow key={key}>
                                            <TableCell>{key}</TableCell>
                                            <TableCell>{flatSettingsMap[key]||''}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}



function MappingsJson2html(json) {
    const topFields = [
        {title: "타입", key: "type", component: (val) => {return val}},
        {title: "색인", key: "enabled", component: (val) => {return <Checkbox style={{cursor: "default"}} checked={val||true}/>}},
        {title: "분석기", key: "analyzer", component: (val) => {return val}},
        {title: "copy_to", key: "copy_to", component: (val) => {return val}},
        {title: "ignore_above", key: "ignore_above", component: (val) => {return val}},
        {title: "null_value", key: "null_value", component: (val) => {return val}},
        {title: "doc_values", key: "doc_values", component: (val) => {return val}},
        {title: "similarity", key: "similarity", component: (val) => {return val||""}},
        {title: "term_vector", key: "term_vector", component: (val) => {return val}},
        {title: "store", key: "store", component: (val) => {return <Checkbox style={{cursor: "default"}} checked={val||true}/>}}
    ]

    const flatJsonMap = flat(json['properties'] ? json['properties'] : json)

    let formatKeyFlatJsonMap = {}
    Object.keys(flatJsonMap).forEach(key => {
        const replaceKey = key.replace(/\.properties/gi, "")

        const sortKey = replaceKey.substring(0, replaceKey.lastIndexOf("."))
        const suffix = replaceKey.substring(replaceKey.lastIndexOf(".") + 1)
        if (!formatKeyFlatJsonMap[sortKey]) {
            formatKeyFlatJsonMap[sortKey] = {}
        }
        formatKeyFlatJsonMap[sortKey][suffix] = flatJsonMap[key]
    })

    return (
        <table border={1} width={"100%"} cellSpacing={0} cellPadding={8}>
            <thead>
            <tr>
                <th>#</th>
                <th>이름</th>
                {
                    topFields.map(field => <th key={field['title']}>{field['title']}</th>)
                }
                <th>기타설정</th>
            </tr>
            </thead>
            <tbody>
            {
                Object.keys(formatKeyFlatJsonMap).map((key, index) => {
                    const obj = formatKeyFlatJsonMap[key]

                    const etc = Object.keys(obj).map(k => {
                        const o = topFields.find(m => m['key'] === k)
                        return o ? null : k + ": " + obj[k]
                    }).filter(o => o)
                    return (
                        <tr key={index}>
                            <td align={"center"}>{index + 1}</td>
                            <td>{key}</td>
                            {
                                topFields.map(field => <td key={field['title']} align={"center"}>{field['component'](obj[field['key']])}</td>)
                            }
                            <td>
                                {etc.join(", ")}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

function Render({json, type}) {
    let validJson = json
    try {
        if (typeof json === 'string') {
            validJson = JSON.parse(json)
        }
    } catch (error) {
        // console.warn("parsing error", typeof json)
    }

    if (validJson && type === "mappings") {
        return MappingsJson2html(validJson)
    } else if (validJson && type === "settings") {
        return SettingsJson2html(validJson)
    } else {
        return (
            <React.Fragment>
                <Box style={{minHeight: "150px"}}>
                </Box>
            </React.Fragment>
        )
    }

}

export default Render