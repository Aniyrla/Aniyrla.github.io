document.getElementById('checkButton').addEventListener('click', function() {
  function getLastModified() {
     var lastModified = document.lastModified;
     return lastModified;
 }
setTimeout(function() {
     var resultElement = document.getElementById('result');
     var lastModified = getLastModified();
     resultElement.textContent = 'Последнее изменение было:  ' + lastModified;
 }, 5000);
});
function removeElement() {
  const element3 = document.getElementById('element3');
  element3.remove();
}

// Применяем стили к элементу Nº3 при нажатии на кнопку "Сменить стиль"
function izmen_cvet() {
  const element3 = document.getElementById('element3');
  element3.style.width = '500px';
  element3.style.height = '200px';
  element3.style.border = '10px solid red';
  element3.style.position = 'absolute';
  element3.style.top = '0';
  element3.style.right = '0';
};

// Функция для получения информации об операционной системе и браузере пользователя
function getSystemInfo() {
  var browserInfo = navigator.userAgent;
    var osInfo = navigator.platform;
    var userInfoText = "Браузер: " + browserInfo + "\n" + "Операционная система: " + osInfo;
    var userInfoWindow = window.open("", "_blank", "width=1400,height=300");
    userInfoWindow.document.write("<pre>" + userInfoText + "</pre>");
    setTimeout(function() {
      userInfoWindow.close();
    }, 4000);
}
alert("11");