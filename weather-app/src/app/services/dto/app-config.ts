export interface IAppConfig {
    location: {
        cookieName: string;
        default: string;
    };

    api: {
        baseUrl: string;
        key: string;
    };
}