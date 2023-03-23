/*
 * @Date: 2023-03-23 10:29:25
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 10:59:53
 * @FilePath: \manager\src\http\index.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';
import { ElMessage } from 'element-plus';

const config = {
  baseURL: 'http://localhost:8089',
  timeout: 10000,
};

class Http {
  private instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }
  //拦截器
  private interceptors() {
    //请求发送之前的拦截，token的配置
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        let token = '';
        if (token) {
          config.headers!['token'] = token;
        }
        return config;
      },
      (error: any) => {
        error.data = {};
        error.data.msg = '服务器异常，请联系管理员';
        return error;
      }
    );
    //返回的拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.data.code != 200) {
          ElMessage.error(res.data.msg || '服务器错误');
          return Promise.reject(res.data.msg || '服务器错误');
        }
        return res.data;
      },
      (error: any) => {
        error.data = {};
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.data.msg = '服务器异常，请联系管理员';
              break;
            case 401:
              error.data.msg = '未授权';
              break;
            case 404:
              error.data.msg = '请求未找到';
              break;
            case 405:
              error.data.msg = '请求方法未允许';
              break;
            case 408:
              error.data.msg = '请求超时';
              break;
            case 500:
              error.data.msg = '服务器错误';
              break;
            case 502:
              error.data.msg = '网络错误';
              break;
            case 503:
              error.data.msg = '服务不可用';
              break;
            case 504:
              error.data.msg = '网络超时';
              break;
            case 505:
              error.data.msg = 'http版本错误';
              break;
            default:
              error.data.msg = '未知错误';
          }
          ElMessage.error(error.data.msg);
        }
      }
    );
  }
  //get
  get(url: string, params?: object): Promise<any> {
    return this.instance.get(url, {});
  }
  //post
  post(url: string, data?: object): Promise<any> {
    return this.instance.post(url, data);
  }
  //put
  put(url: string, data?: object): Promise<any> {
    return this.instance.put(url, data);
  }
  //delete
  delete(url: string): Promise<any> {
    return this.instance.delete(url);
  }
}
export default Http;
