<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            color: #333;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }
        h2 {
            color: #007BFF;
            margin-top: 0;
            font-size: 24px;
        }
        p {
            color: #555;
            margin: 0 0 20px;
            font-size: 16px;
        }

        .footer {
            margin-top: 20px;
            color: #555;
            font-size: 16px;
        }
        .footer p {
            margin: 0;
        }
    </style>
</head>
<body>
        <h2>Hello {{ $data['username'] }}</h2>
        <p>One of your mentor {{ $data['mentor_name'] }} for the functional area {{ $data['functional'] }} has ended this match and no longer wishes to continue with the mentorship due to the following reason:</p>
        <p>{{ $data['reason'] }}<p>
        <p>Rest assured Your next matching process will begin shortly. Should there be a suitable match for a Mentor, we will notify you via email as soon as we can. </p>
        <div class="footer">
            <p>Stay tuned!</p>
            <p>Team upcie</p>
        </div>
    </div>
</body>
</html>
