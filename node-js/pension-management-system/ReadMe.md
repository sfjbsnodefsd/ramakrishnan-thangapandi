# Pension management backend
1. Auth-service
2. Pension-details
3. Pension-process

Project uses mysql

# Auth-service
Hit http://localhost:7000/auth-service/users/login
Body: {
    "email": "veera@test.com",
    "password": "test123"
}
# user creation
http://localhost:6000/auth-service/users/
{
    "name":"veera",
    "email":"veera@test.com",
    "password":"test123",
    "aadhar":"1234567890"
}
# pension creation
http://localhost:6001/pensioner/create
{"name":"rama",
"date_of_birth":"1990-01-01",
"pan":"ASDFG1567G",
"aadhar":"123456789012",
"salary_earned":123456,
"allowances":1234,
"self_family_pension":"self",
"bank_name":"hdfc",
"account_number":"123412341234",
"public_or_private":"private"

}
# Get all pensioners
http://localhost:6001/pensioner/getall
# Get pension by Aadhar
http://localhost:6001/pensioner/getByAadhar/123456789012