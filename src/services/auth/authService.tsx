import http from '../http/http.service';
import { DEV_API } from './../../constants/api.constants';

const apiEndpoint = DEV_API + "auth";

export function login(email: string, password: string): any {
    return http.post(apiEndpoint, { email, password });
}