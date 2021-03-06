const LOCATION = 'LOCATION'
const TOKEN = 'TOKEN'
const NAME = 'NAME'

export function getLocation() {
    const loc = localStorage.getItem(LOCATION);
    if (!loc)
        return 0;
    const location = JSON.parse(loc);
    return location;
}

export function setLocation(location) {
    const locationString = JSON.stringify(location);
    localStorage.setItem(LOCATION, locationString)
}

export function getToken() {
    const rawToken = localStorage.getItem(TOKEN);
    if (!rawToken)
        return 0;
    const token = JSON.parse(rawToken);
    return token;
}

export function setToken(token) {
    const tokenString = JSON.stringify(token);
    localStorage.setItem(TOKEN, tokenString)
}

export function getName() {
    const rawName = localStorage.getItem(NAME);
    if (!rawName)
        return ('Astro-Body');
    const name = JSON.parse(rawName);
    return name;
}

export function setName(Name) {
    const nameString = JSON.stringify(Name);
    localStorage.setItem(NAME, nameString)
}

