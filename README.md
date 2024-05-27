# Google Form Generator with Google Sheets Integration

This project utilizes the MERN stack to create a platform where users can log in using their Google accounts. Once logged in, users can upload two Google Sheet links: one for assessment information and another for student information. The application then generates a Google Form based on the assessment link and sends it to the emails listed in the student information link. Additionally, users can upload PDF files containing data, which will be stored in MongoDB.

## Features

- **Google OAuth Authentication**: Users can log in to the application using their Google accounts.
- **Google Sheet Integration**: Upload Google Sheet links for assessment information and student information.
- **Google Form Generation**: Automatically generate Google Forms from the assessment link.
- **Email Notification**: Send generated Google Forms to the emails listed in the student information link.
- **PDF Upload**: Upload PDF files containing data for storage in MongoDB.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Google OAuth
- **API Integration**: Google Sheets API, Google Forms API
