import axios from 'axios'

class Client {
    constructor(props) {
        console.log("init")
    }
    call(config) {
        return new Promise(async (resolve, reject) => {
            try {
                config.url = process.env.REACT_APP_FASTCATX_SERVER_URL + config.uri
                let response = await axios.request(config)
                console.log('response >>> ', response)
                resolve(response)
            } catch (err) {
                console.error('API Fail', config, err)
                reject(err)
            }
        })
    }
}

const client = new Client()
export default client

//   url?: string;
//   method?: Method;
//   baseURL?: string;
//   transformRequest?: AxiosTransformer | AxiosTransformer[];
//   transformResponse?: AxiosTransformer | AxiosTransformer[];
//   headers?: any;
//   params?: any;
//   paramsSerializer?: (params: any) => string;
//   data?: any;
//   timeout?: number;
//   timeoutErrorMessage?: string;
//   withCredentials?: boolean;
//   adapter?: AxiosAdapter;
//   auth?: AxiosBasicCredentials;
//   responseType?: ResponseType;
//   xsrfCookieName?: string;
//   xsrfHeaderName?: string;
//   onUploadProgress?: (progressEvent: any) => void;
//   onDownloadProgress?: (progressEvent: any) => void;
//   maxContentLength?: number;
//   validateStatus?: (status: number) => boolean;
//   maxRedirects?: number;
//   socketPath?: string | null;
//   httpAgent?: any;
//   httpsAgent?: any;
//   proxy?: AxiosProxyConfig | false;
//   cancelToken?: CancelToken;