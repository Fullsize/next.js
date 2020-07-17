import httpClient from './client/httpClient';
export function init(){
	return httpClient.get('/centent/init');
}