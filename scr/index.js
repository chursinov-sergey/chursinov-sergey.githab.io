import "./styles.css";

document.getElementById('saveContact').addEventListener('click', function() {
    // Данные контакта
    const name = "ИП Чурсинов Сергей";
    const phone = "+79192333302";
    const email = "chursinov.s@gmail.com";

    // Формирование контента VCard (vCard format)
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;CELL:${phone}
EMAIL:${email}
END:VCARD`;

    // Создание Blob (файла)
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Создание временной ссылки и клик по ней
    const link = document.createElement('a');
    link.href = url;
    link.download = "contact.vcf";
    link.click();

    // Очистка
    URL.revokeObjectURL(url);
});