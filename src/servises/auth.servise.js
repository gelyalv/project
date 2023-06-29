export function getUsers () {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:3000/users");
    xhr.send();
}


export function getFetchUsers(){

}

export function getAxiosUsers(){
}