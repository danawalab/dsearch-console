import Client from '~/Client'
import {
    SET_INDEX,
    SET_INDEX_ALIASES,
    SET_INDEX_DOCUMENT_SOURCE_RESPONSE,
    SET_INDEX_DOCUMENTS,
    SET_INDEX_INFO_LIST,
    SET_INDEX_MAPPINGS,
    SET_INDEX_SETTINGS,
    SET_INDEX_STATE,
    SET_INDICES
} from "../constants";


const client = new Client()


export const setIndexAction = (index) => dispatch => dispatch({type: SET_INDEX, payload: index})

export const setIndicesAction = () => dispatch =>
    client.call({
        uri: `/elasticsearch/_cat/indices`,
        params: {
            format: "json",
        }
    })
        .then(response => dispatch({type: SET_INDICES, payload: response.data}))
        .catch(error => console.error(error))


export const setIndexInfoListAction = (index) => dispatch =>
    client.call({
        uri: `/elasticsearch/_cat/indices/${index}`,
        params: {
            format: "json",
        }
    })
        .then(response => dispatch({type: SET_INDEX_INFO_LIST, payload: response.data}))
        .catch(error => console.error(error))


export const setIndexAliasesAction = (index) => dispatch =>
    client.call({
        uri: `/elasticsearch/${index}/_alias`,
        params: {
            format: "json",
        }
    })
        .then(response => dispatch({type: SET_INDEX_ALIASES, payload: (response.data[index] || {})['aliases']}))
        .catch(error => console.error(error))

export const setIndexSettingsAction = (index) => dispatch =>
    client.call({
        uri: `/elasticsearch/${index}/_settings?include_defaults`,
        params: {
            format: "json",
        }
    })
        .then(response => dispatch({type: SET_INDEX_SETTINGS, payload: response.data[index]||{}}))
        .catch(error => console.error(error))

export const setIndexMappingsAction = (index) => dispatch =>
    client.call({
        uri: `/elasticsearch/${index}/_mappings`,
        params: {
            format: "json",
        }
    })
        .then(response => dispatch({type: SET_INDEX_MAPPINGS, payload: ((response.data[index] || {})['mappings']||{}) }))
        .catch(error => console.error(error))
    // dispatch({type: SET_INDEX_MAPPINGS, payload: ((response.data[index] || {})['mappings']||{})['properties'] })

export const setIndexStateAction = (index) => dispatch =>
    client.call({
        uri: `/elasticsearch/${index}/_stats`,
        params: {
            format: "json",
        }
    })
        .then(response => dispatch({type: SET_INDEX_STATE, payload: response.data }))
        .catch(error => console.error(error))

export const editDynamicQueryAction = (index, query) => dispatch => client.call({
    uri: `/elasticsearch/${index}/_settings`,
    method: "PUT",
    data: query
})


export const setIndexDocumentsAction = ({index, pageNum, rowSize, id, analysis}) => dispatch => client.call({
    uri: `/indices/${index}/_docs`,
    params: {
        index,
        pageNum,
        rowSize,
        id,
        analysis
    }
}).then(response => dispatch({
    type: SET_INDEX_DOCUMENTS,
    payload: response.data,
})).catch(err => console.error(err))


export const setIndexDocumentSourceListAction = ({index, from, size, id, columns, keyword = null}) => dispatch => client.call({
    uri: `/elasticsearch/${index}/_search`,
    method: 'post',
    data: id !== undefined && id !== null && id !== "" ?
        { query: { match: { _id: id } }, from, size, sort: [{ _id: { order: "desc" } }] }
        :
        keyword !== undefined && keyword !== null && keyword !== "" ?
            { query: {
                    bool: {
                        minimum_should_match: 1,
                        should: [
                            {
                                multi_match: {
                                    query: keyword,
                                    fields: columns,
                                    operator: "or",
                                    boost: 1,
                                    "type": "phrase"
                                }
                            },
                            {
                                match: {
                                    _id: keyword
                                }
                            }
                        ]
                    }
                },
                from,
                size,
                sort: [
                    {_score: {order: "desc"}}
                    // , { "_id": { "order": "desc" } }
                ]
            }
            :
            { from, size, sort: [
                { _score: { order: "desc" } },
                // { _id: { order: "desc" } }
                ]
            }
}).then(response => {
    dispatch({ type: SET_INDEX_DOCUMENT_SOURCE_RESPONSE, payload: response.data })
    return response.data;
})

export const editIndexDocumentSourceAction = ({index, id, body}) => dispatch => client.call({
    uri: `/elasticsearch/${index}/_doc/${id}`,
    method: 'put',
    data: body
}).then(response => response.data)

export const addIndexDocumentSourceAction = ({index, body}) => dispatch => client.call({
    uri: `/elasticsearch/${index}/_doc`,
    method: 'post',
    data: body
}).then(response => response.data)

export const deleteIndexDocumentSourceAction = ({index, id}) => dispatch => client.call({
    uri: `/elasticsearch/${index}/_doc/${id}`,
    method: 'DELETE',
}).then(response => response.data)

export const analyzerDocumentSourceAction = (index, analyzerDocument) => dispatch => client.call({
    uri: `/indices/${index}/analyzer`,
    method: "post",
    data: analyzerDocument
}).then(response => response.data)


export const setIndexManagedAction = (action, index) => dispatch => client.call({
    uri: `/elasticsearch/${index}/${action}`,
    method: "post"
}).then(response => response.data)

export const deleteIndexAction = index => dispatch => client.call({
    uri: `/elasticsearch/${index}`,
    method: "delete"
}).then(response => response.data)