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
        h4 {
            color: #007BFF;
            margin: 0 0 20px;
            font-size: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #f9f9f9;
            color: #333;
        }
        td img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
        }
        .button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
        }
        .button:hover {
            background-color: #0056b3;
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

        <h2>Hello {{ $data['user_name'] }},</h2>
        <p>We hope this message finds you well! 🎉</p>
        <p>We are happy to know that your initiation request of one of our SMEs has been accepted. We are hereby attaching the complete details of your choosen SME so that you can contact them right away.
            We have also added the same SME to your profile so that you can review them later.
        </p>
            <h4>Here are the details</h4>
            <table>
                <thead>
                    <tr>
                        <th>Profile Photo</th>
                        <th>Contact Person</th>
                        <th>Matched Functional Area</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Industry Sector</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td><img src="{{ $data['company']->profile_photo }}" alt="Profile Photo"></td>
                            <td>{{ $data['company']->name }}</td>
                            <td>{{ $data['functional_area']}}</td>
                            <td>{{ $data['company']->email}}</td>
                            <td>{{ $data['company']->phone}}</td>
                            <td>{{ $data['company']->industry_sector[0]}}</td>
                        </tr>
                </tbody>
            </table>
            <p>{{ $data['company']->company_description }}</p>
            <p>{{ $data['company']->additional_information }}</p>
        <div class="footer">
            <p>Thank you for choosing Upcie! If you have any problems or questions to be addressed or need further assistance, don't hesitate to reach out to us. We're here to help!</p>
            <p>Warm regards,<br>The Upcie Team</p>
        </div>
    </div>

</body>
</html>
