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
        <p>We are pleased to introduce you to your matched Mentee. Please kindly review their profile.</p>
        {{-- @if(count($data['matched_smes']) == 0)
            <p>At the moment, our system hasn't identified any new matches for your provided functional area. But don’t worry, our team is diligently working to find the best possible matches for you. Please bear with us a little longer!</p>
        @else --}}
            <table>
                <thead>
                    <tr>
                        <th>Profile Photo</th>
                        <th>Company Name</th>
                        <th>Contact Person</th>
                        <th>Functional Area</th>
                        <th>Current Problems</th>
                        <th>Approve</th>
                        <th>Disapprove</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($data['matched_smes'] as $company)
                        <tr>
                            <td><img src="{{ $company->profile_photo }}" alt="Profile Photo"></td>
                            <td>{{ $company->company_name }}</td>
                            <td>{{ $company->contact_name }}</td>
                            <td>{{ $data['functional'] }}</td>
                            <td>{{ $company->current_problem }}</td>
                            <td>
                                {{-- <a href="{{route('connect.connectedSme', ['company_id' => $company->id, 'mentor_id' => urlencode($data['mentor_id'])]) }}" class="button">Accept</a> --}}
                                <a href={{ $company->link }} class="button">Accept</a>
                            </td>
                            <td>   <a href="{{ route('landing.home') }}" class="button decline-button">Decline</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        {{-- @endif --}}

        <div class="footer">
            <p>If you choose to accept this Mentee, please click on the “Accept” button. From thereon, your Mentee will receive your profile to review. If they accept your mentorship, we will send them your email contact details, and they will initiate contact with you. </p>
            <p>If you choose to decline this Mentee, please click on the “Decline” button, a dropdown will appear, and we request that you select why you declined this Mentee. We will provide this feedback to the SME Mentee. </p>
            <p>Thank you for your response,<br>Team upcie</p>
        </div>
    </div>

</body>
</html>
