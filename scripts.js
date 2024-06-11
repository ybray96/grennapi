const apiUrl = 'https://7103.api.greenapi.com';
document.getElementById('getSettings').addEventListener('click', function () {
    const instance = document.getElementById('instance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    const url = `${apiUrl}/waInstance${instance}/getSettings/${apiToken}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response').value = 'Error: ' + error.message;
        });
});
document.getElementById('getStateInstance').addEventListener('click', function () {
    const instance = document.getElementById('instance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    const url = `${apiUrl}/waInstance${instance}/getStateInstance/${apiToken}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response').value = 'Error: ' + error.message;
        });
});
document.getElementById('sendMessage').addEventListener('click', function () {
    const instance = document.getElementById('instance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    const phoneNumber = document.getElementById('phoneNumber').value + '@c.us';
    const message = document.getElementById('message').value;
    const url = `${apiUrl}/waInstance${instance}/sendMessage/${apiToken}`;

    const data = {
        chatId: phoneNumber,
        message: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response').value = 'Error: ' + error.message;
        });
});
document.getElementById('sendFileByUrl').addEventListener('click', function () {
    const instance = document.getElementById('instance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    const phoneNumber = document.getElementById('filePhoneNumber').value + '@c.us';
    const fileUrl = document.getElementById('fileUrl').value;
    const url = `${apiUrl}/waInstance${instance}/sendFileByUrl/${apiToken}`;

    const data = {
        chatId: phoneNumber,
        urlFile: fileUrl,
        fileName: "horse.png",
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('response').value = 'Ошибка: ' + error.message;
        });
});
