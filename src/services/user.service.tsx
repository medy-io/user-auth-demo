import http from './http/http.service';
import { DEV_API } from './../constants/api.constants';

const apiEndpoint = DEV_API + "/users";

export function register(name: string, email: string, password: string): Promise<Response> {
    return http.post(apiEndpoint, { name, email, password });
}