window.onload = () => {
    var addresses = {
        sev: {
            id: 'sev',
            address: 'ул. Гоголя 21, Севастополь. Россия',
            phone: '+7 (978) 09-25-846',
            phone_city: '93-70-18',
            email: 'sev@printmaster-it.ru',
            schedule: {
                work: '9:00 - 18:00',
                weekend: '10:00 - 14:00'
            }
        },
        simf: {
            id: 'simf',
            phone: '+7 (978) 045 40 30',
            address: 'ул. Севастопольская, 112, Сиферополь. Россия',
            phone_city: '93-70-18',
            email: 'simf@printmaster-it.ru',
            schedule: {
                work: '9:00 - 18:00',
                weekend: '10:00 - 14:00'
            }
        }
    }

    var town = '';

    if (window.localStorage.getItem('printmasterTown')) {
        town = window.localStorage.getItem('printmasterTown');
        setTownInfo(addresses[town]);
    } else {
        town = (ymaps.geolocation.city === 'Симферополь')
            ? 'simf'
            : 'sev'

        var res = confirm('Ваш город ' + ymaps.geolocation.city + '?')
        console.log(res)

        window.localStorage.setItem('printmasterTown', town);
        setTownInfo(addresses[town]);
    }

    function setTownInfo(data) {
        var headerSchedule = '';

        var footerSchedule
    }
}