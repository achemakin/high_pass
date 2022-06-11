// Yandex Map
function init(){
  const myPlacemark = new ymaps.Placemark([55.75792166721892,37.60099464195388], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Ellipse.svg',
      iconImageSize: [12, 12],
      iconImageOffset: [-3, -42]
  });

  const contactsMap = new ymaps.Map("contacts-map", {
      center: [55.75792166721892,37.60099464195388],
      zoom: 14,
      controls: [],
  });

  contactsMap.geoObjects.add(myPlacemark);

  contactsMap.controls.remove('geolocationControl'); // удаляем геолокацию
  contactsMap.controls.remove('searchControl'); // удаляем поиск
  contactsMap.controls.remove('trafficControl'); // удаляем контроль трафика
  contactsMap.controls.remove('typeSelector'); // удаляем тип
  contactsMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  contactsMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  contactsMap.controls.remove('rulerControl'); // удаляем контрол правил
  contactsMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  // if (window.matchMedia("(max-width: 1399px)").matches) {
  //   contactsMap.controls.remove(zoomControl);
  //   contactsMap.controls.remove(geolocationControl);
  // }

  // if (window.matchMedia("(max-width: 767px)").matches) {
  //   contactsMap.behaviors.disable(['drag']);
  // }

  // window.addEventListener('resize', () => {
  //   if (window.matchMedia("(max-width: 767px)").matches) {
  //     contactsMap.behaviors.disable(['drag']);
  //   } else if (window.matchMedia("(max-width: 1399px)").matches) {
  //     contactsMap.controls.remove(zoomControl);
  //     contactsMap.controls.remove(geolocationControl);
  //     contactsMap.behaviors.enable(['drag']);
  //   } else {
  //     contactsMap.controls.add(zoomControl);
  //     contactsMap.controls.add(geolocationControl);
  //     contactsMap.behaviors.enable(['drag']);
  //   }
  // })
}

if (typeof ymaps !== 'undefined') ymaps.ready(init);
