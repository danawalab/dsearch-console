import React, {useEffect} from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Helmet from 'react-helmet';

import {
    Box as MuiBox,
    Button as MuiButton,
    Card as MuiCard,
    Divider as MuiDivider,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography as MuiTypography,
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {palette, positions, spacing} from "@material-ui/system";
import {setIndexTemplatesAction} from "../../../redux/actions/indexTemplateActions";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 250,
    },
    root: {
        flexGrow: 1,
        width: '100%',
    },
    edit: {
        width: '100%'
    }
}));

const Divider = styled(MuiDivider)(spacing);
const Box = styled(MuiBox)(spacing, positions);
const Typography = styled(MuiTypography)(spacing, positions);

function createData(name, pattern) {
    return { name, pattern};
}

function Templates({dispatch, templates}) {
    const classes = useStyles();

    useEffect(() => {
        dispatch(setIndexTemplatesAction())
    }, [])


    const rows = templates.map(template => createData(template['name'], template['index_patterns']));

    return (
        <React.Fragment>
            <Helmet title="템플릿"/>

            <br/>

            <Typography variant="h3"
                        gutterBottom
                        display="inline"
            >
                템플릿
            </Typography>

            <Divider my={6}/>

            <Box align={'right'}>
                <Link href={"/indices/template"} color={"primary"} >
                    템플릿 생성
                </Link>
            </Box>

            <br/>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center">패턴</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row" align="center">{i + 1}</TableCell>
                                <TableCell align="center">
                                    <Link href={`/indices/templates/${row.name}`}>
                                        {row.name}
                                    </Link>
                                </TableCell>
                                <TableCell align="center">{row.pattern}</TableCell>
                                <TableCell align="center">
                                    <Link href={`/indices/templates/${row.name}/edit`} color={"primary"}>수정</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </React.Fragment>
    );
}

export default connect(store => ({ ...store.indexTemplateReducers }) )(Templates)