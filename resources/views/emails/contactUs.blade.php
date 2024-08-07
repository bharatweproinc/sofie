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
    <div class="container">
        <h2>New Message from {{ $data['name'] }}!</h2>
        <p>Sender's Email - {{ $data['email'] }} </p>
        @if($data['company'] == null)
            <br/>
        @else
            <p>Sender's Company - {{ $data['company'] }}</p>
        @endif
        <h3>Sender's Message</h3>
        <p>{{ $data['message'] }}</p>
    </div>
</body>
</html>
