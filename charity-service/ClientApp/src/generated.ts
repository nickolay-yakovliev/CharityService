﻿/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.3.1.0 (NJsonSchema v9.14.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class SampleDataClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:44318";
    }

    weatherForecasts(): Promise<WeatherForecast[] | null> {
        let url_ = this.baseUrl + "/api/SampleData/WeatherForecasts";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            }
        };

        return this.instance.request(options_).then((_response: AxiosResponse) => {
            return this.processWeatherForecasts(_response);
        });
    }

    protected processWeatherForecasts(response: AxiosResponse): Promise<WeatherForecast[] | null> {
        const status = response.status;
        let _headers: any = {}; 
        if (response.headers && response.headers.forEach) { 
            response.headers.forEach((v: any, k: any) => _headers[k] = v);
        };
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(WeatherForecast.fromJS(item));
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<WeatherForecast[] | null>(<any>null);
    }
}

export class WeatherForecast implements IWeatherForecast {
    dateFormatted?: string | undefined;
    temperatureC?: number;
    summary?: string | undefined;
    temperatureF?: number;

    constructor(data?: IWeatherForecast) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.dateFormatted = data["dateFormatted"];
            this.temperatureC = data["temperatureC"];
            this.summary = data["summary"];
            this.temperatureF = data["temperatureF"];
        }
    }

    static fromJS(data: any): WeatherForecast {
        data = typeof data === 'object' ? data : {};
        let result = new WeatherForecast();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["dateFormatted"] = this.dateFormatted;
        data["temperatureC"] = this.temperatureC;
        data["summary"] = this.summary;
        data["temperatureF"] = this.temperatureF;
        return data; 
    }
}

export interface IWeatherForecast {
    dateFormatted?: string | undefined;
    temperatureC?: number;
    summary?: string | undefined;
    temperatureF?: number;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}