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
            margin-right: 10px;
            text-align: center;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .decline-button {
            background-color: #dc3545;
        }
        .decline-button:hover {
            background-color: #c82333;
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
        <p>We are pleased to introduce you to your matched Mentor. They have accepted to Mentor you. Please kindly review their profile. </p>
        <table>
            <thead>
                <tr>
                    <th>Profile Photo</th>
                    <th>Contact Person</th>
                    <th>Matched Functional Area</th>
                    <th>Years of Experience</th>
                    <th>Approve</th>
                    <th>Disapprove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="{{ $data['mentor']->profile_photo }}" alt="Profile"></td>
                    <td>{{ $data['mentor']->name }}</td>
                    <td>{{ $data['matched_area'] }}</td>
                    <td>{{ $data['mentor']->experience }}</td>
                    <td>
                        <a href="{{ route('connect.sendMentorDetails', ['company_id' => $data['company_id'], 'mentor_id' => $data['mentor']['id'], 'area' => $data['matched_area'] ])}}" class="button">Accept</a>
                    </td>
                    <td><a href="{{ route('landing.declineMentor', ['mentor_id' => $data['mentor']['id'], 'company_id' => $data['company_id']]) }}" class="button decline-button">Decline</a></td>
                </tr>
            </tbody>
        </table>

        <div class="footer">
            <p>If you choose to accept this Mentor, please click on the “Accept” button. We will send you the email contact for your matched Mentor. From there, please initiate contact with your Mentor first.</p>
            <p>If you choose to decline this Mentor, please click on the “Decline” button, a dropdown will appear, and we request that you select why you declined this Mentor. We will provide this feedback to the Mentor. </p>
            <p>Thank you for your response,<br>Team upcie</p>
        </div>
    </div>
</body>
</html>
