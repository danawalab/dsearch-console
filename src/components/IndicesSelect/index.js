import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {setIndexAction, setIndicesAction} from "../../redux/actions/indicesActions";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 100
    }
}));

function IndicesSelect({dispatch, indices, index, enableSystem=true, onSelected}) {
    const classes = useStyles()
    const handleChange = (event) => {
        if (onSelected) {
            onSelected(event.target.value)
        }
        dispatch(setIndexAction(event.target.value))
    };

    useEffect(() => {
        dispatch(setIndicesAction())
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <React.Fragment>
            <Box>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">인덱스</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={index}
                        onChange={handleChange}
                    >
                        {
                            indices.filter(index => !enableSystem ? !index['index'].startsWith(".") : true ).map(index => index['index']).sort()
                                .map((index, i) => (<MenuItem key={i} value={index}>{index}</MenuItem>))
                            // indices.filter(index => !enableSystem ? !index['index'].startsWith(".") : true )
                            //     .map((index, i) => (<MenuItem key={i} value={index['index']}>{index['index']}</MenuItem>))
                        }
                    </Select>
                </FormControl>

                {/*<Checkbox*/}
                {/*    defaultChecked*/}
                {/*    color="default"*/}
                {/*    inputProps={{ 'aria-label': 'checkbox with default color' }}*/}
                {/*/>*/}
            </Box>
            <br/>
        </React.Fragment>
    );
}

export default connect(store => ({
    ...store.indicesReducers,
}))(IndicesSelect);
