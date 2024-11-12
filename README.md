<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Моє кохання до тебе</title>
  <style>
    /* Основний стиль */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      color: #333;
    }

    .container {
      width: 90%;
      max-width: 700px;
      background: #fff;
      padding: 2em;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      text-align: center;
    }

    h1 {
      font-size: 2.5em;
      color: #e57373;
      margin-bottom: 0.5em;
    }

    p {
      font-size: 1.2em;
      margin: 0.5em 0;
      line-height: 1.6;
    }

    .gallery {
      margin: 1.5em 0;
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .gallery img {
      width: 100%;
      max-width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .future-message {
      margin-top: 2em;
      font-style: italic;
      color: #333;
      font-size: 1.1em;
    }

    .quotes {
      margin: 2em 0;
      padding: 1em;
      font-style: italic;
      color: #555;
      border-left: 4px solid #e57373;
    }

    .contact-btn {
      display: inline-block;
      margin-top: 1.5em;
      padding: 0.8em 1.5em;
      color: #fff;
      background-color: #e57373;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .contact-btn:hover {
      background-color: #d32f2f;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Моє кохання до тебе</h1>
    <p>Кохана, ти – моє натхнення, моя радість і підтримка. Я звісно безмежно вдячний за те, що ти є в моєму житті.</p>
    
    <p>З тобою я відчуваю справжнє щастя. Ти моє сонечко яке наповнює мене теплом та любов’ю. Я хочу, щоб ти завжди знала, як сильно я тебе кохаю.</p>

    <div class="gallery">
      <img src="1.jpg" alt="Спогад 1">
      <img src="2.jpg" alt="Спогад 2">
      <img src="3.jpg" alt="Спогад 3">
    </div>

    <div class="quotes">
      <p>“Любов – це не чекання дощу закінчення, це про танці під дощем.”</p>
      <p>“Разом ми – найкраща команда.”</p>
    </div>

    <p class="future-message">Кіця, разом ми пройдемо всі шляхи, всі бурі й сонячні дні.</p>

    <a href = "index.html" class="contact-btn">КОХАТИ</a>
  </div>
</body>
</html>
