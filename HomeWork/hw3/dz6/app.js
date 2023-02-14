let askBirthYear, askCity, askFavoriteSport;

askBirthYear = prompt('Введіть рік народження');
if (askBirthYear == null) {
    askBirthYear = 'Шкода, що Ви не захотіли ввести свій вік'
} else {
    askBirthYear = 'Твій вік: ' + (2023 - askBirthYear)
}

askCity = prompt('Введіть місто в якому ви мешкаєте?');
askCity = getDescriptionByCity(askCity);

askFavoriteSport = prompt('Який ваш улюбленний вид спорту?');
askFavoriteSport = getDescriptionByFavoriteSport(askFavoriteSport);

function getDescriptionByCity(str) {
    switch(str) {
        case 'Київ': return 'Ти живеш в Україні, столицею якої є місто Київ';
        case 'Вашингтон': return 'Ти живеш в США, столицею якої є місто Вашингтон';
        case 'Лондон': return 'Ти живеш в Англії, столицею якої є місто Лондон';
        case null: return 'Шкода, що Ви не захотіли ввести своє місто';
        default: return 'Твоє місто проживання: ' + str;
    }
}

function getDescriptionByFavoriteSport(str) {
    switch(str) {
        case 'Бокс': return 'Ти ввів "Бокс". Круто! Хочешь стати як Усік?';
        case 'Дота2': return 'Ти ввів "Дота2". Круто! Хочешь до команди "Team Spirit"?';
        case 'Баскетбол': return 'Ти ввів "Баскетбол". Круто! Хочешь стати як Майкл Джордан?';
        case null: return 'Шкода, що Ви не захотіли ввести свій спорт';
        default: return 'Твій улюбленний спорт: ' + str;
    }
}

alert(`
${askBirthYear}
${askCity}
${askFavoriteSport}
`);
