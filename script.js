<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il Tuo Sito</title>
    <link rel="stylesheet" href="style.css"> <!-- Collegamento al CSS -->
</head>
<body>


    <h1>Benvenuto nel nostro sito!</h1>
    <button id="myButton">Clicca qui</button>


    <!-- Scrivi direttamente il codice JavaScript nel file HTML -->
    <script>
        document.getElementById('myButton').onclick = function() {
            alert('Hai cliccato il bottone!');
        }
    </script>


</body>
</html>
