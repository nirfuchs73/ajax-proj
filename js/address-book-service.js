'use strict';

function getUsers(onSuccess) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            var users = JSON.parse(httpRequest.responseText);
            // console.log('users', users);
            onSuccess(users);
        }
    }

    httpRequest.open("GET", "http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true", true);
    httpRequest.send();
    console.log('Done Sending the AJAX Request');
}