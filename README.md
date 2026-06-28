# Career Guidance

A free web platform that helps students choose the right career after 10th and Intermediate.

**Live Website**: https://career-guidance-five-virid.vercel.app

## About

This project provides complete career information in one place. It covers streams, entrance exams, jobs, higher education, and study abroad options to help students make informed decisions.

## Features

- **Mobile Friendly**: Works on all devices
- **User Login**: Secure authentication with Firebase
- **Contact Form**: Submit queries that are saved to database
- **Complete Information**: Covers 9 major career areas
- **Free Access**: No cost to use

## Career Modules

1. Streams After 10th - Science, Commerce, Arts
2. Streams After Intermediate - MPC, BiPC, MEC, CEC options
3. Entrance Exams - JEE, NEET, CLAT, EAMCET details
4. Government Jobs - UPSC, Banking, Railway, Defence
5. Private Jobs - IT, Marketing, Finance, Design
6. Professional Courses - CA, Law, Architecture
7. Higher Education - UG, PG, PhD guidance
8. Entrepreneurship - Startup basics and schemes
9. Study Abroad - USA, UK, Canada, Australia process

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Hosting**: Vercel
- **Version Control**: GitHub

## How It Works

1. Student visits the website and browses career information
2. Optional login using Email or Google account
3. Students can submit questions through the contact form
4. Data is stored securely in Firebase Firestore

## Database

**Firebase Firestore** is used as the cloud database.
- Collection: `contacts`
- Stores: name, email, message, timestamp
- Security rules ensure only valid data is accepted

## Deployment

The website is hosted on Vercel with automatic deployment from GitHub. 
- **Cost**: Free
- **Performance**: Global CDN with HTTPS
- **Build Time**: ~30 seconds

## Future Scope

1. AI-based career recommendations
2. Scholarship database
3. College predictor tool
4. Job notification system
5. Career assessment quiz

## Project Details

**Type**: Community Service Project (CSP)  
**Team Size**: 6 Members  
**Duration**: 4 Weeks  
**Year**: 2026

## Run Locally

```bash
git clone https://github.com/snehikapasumarthi/career-guidance.git
cd career-guidance
