import request from 'superagent';

const apodURL = 'https://apodapi.herokuapp.com/api';

async function fetchAndReturnBody(URL) {
    const { body } = await request 
    .get(URL)
    
    return body.bodies;
}
export async function getSolarSystemAPI (pageNumber, filter, search) {
    switch(filter) {
        case 'all':
            return await fetchAndReturnBody(`https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=englishName,sw,${search}`);
        case 'planets':
            return await fetchAndReturnBody(`https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,neq,&filter[]=englishName,sw,${search}`);
        case 'moons':
            return await fetchAndReturnBody(`https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=aroundPlanet,neq,&filter[]=englishName,sw,${search}`);
        default:
            return await fetchAndReturnBody(`https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,eq,&filter[]=aroundPlanet,eq,&filter[]=id,sw,${search}`);
    }
}

export async function getLocationAPI (city) {
    const { body } = await request 
        .get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION}&q=${city}&format=json`)
        
    return { 
        latitude: body[0].lat, 
        longitude: body[0].lon, 
        name: body[0].display_name 
    };
}

export async function getApodAPI () {
    fetchAndReturnBody(apodURL)
}

