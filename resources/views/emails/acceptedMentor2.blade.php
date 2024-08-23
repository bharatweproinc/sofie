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
            margin: 30px auto;
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            border: 1px solid #e0e0e0;
        }
        h2 {
            color: #007BFF;
            margin-top: 0;
            font-size: 26px;
        }
        p {
            color: #555;
            margin: 0 0 20px;
            font-size: 16px;
            line-height: 1.8;
        }
        h4 {
            color: #007BFF;
            margin: 0 0 20px;
            font-size: 20px;
        }
        .button {
            border: none;
            padding: 12px 25px;
            cursor: pointer;
            border-radius: 6px;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .button.accept-button {
            background-color: #007BFF;
            color: white;
        }
        .button.accept-button:hover {
            background-color: #0056b3;
        }
        .button.decline-button {
            background-color: #FF4B4B;
            color: white;
        }
        .button.decline-button:hover {
            background-color: #c0392b;
        }
        .button-row {
            display: flex;
            gap: 15px;
            margin-bottom: 25px;
        }
        hr {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 25px 0;
        }
        .footer {
            margin-top: 30px;
            color: #555;
            font-size: 16px;
        }
        .footer p {
            margin: 0;
            line-height: 1.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hello {{ $data['user_name'] }},</h2>
        <p>We are pleased to introduce you to your matched Mentee. Please kindly review their profile.</p> 
        @foreach($data['matched_smes'] as $company)
            <p><strong>Contact Name:</strong> {{$company->contact_name}}</p>
            <p><strong>Company Name:</strong> {{ $company->company_name }}</p>
            <p><strong>Year Founded:</strong> {{ $company->founded_year }}</p>
            <p><strong>Number of Employees:</strong> {{ $company->team_size }}</p>
            <p><strong>Revenue Size:</strong> {{ $company->current_revenue }}</p>
            <p><strong>Industry Sector:</strong> {{ $company->industry_sector }}</p>
            <p><strong>Functional Area:</strong> {{ $company->matched_area }}</p>
            <p><strong>Current Problem faced:</strong> {{ $company->current_problem }}</p>
            <div class="button-row">
                <a href={{ $company->link }} class="button accept-button">Accept</a>
                &nbsp; &nbsp;
                <a href="{{ route('landing.declineSme', ['mentor_id' => $data['mentor_id'], 'company_id' => $company->id]) }}" class="button decline-button">Decline</a>
            </div>
            <hr/>
        @endforeach
        <div class="footer">
            <p>If you choose to accept this Mentee, please click on the “Accept” button. From thereon, your Mentee will receive your profile to review. If they accept your mentorship, we will send them your email contact details, and they will initiate contact with you.</p> <br/>
            <p>If you choose to decline this Mentee, please click on the “Decline” button, a dropdown will appear, and we request that you select why you declined this Mentee. We will provide this feedback to the SME Mentee.</p> <br/>
            <p>Thank you for your response,<br>Team upcie</p>
        </div>
    </div>
</body>
</html>
