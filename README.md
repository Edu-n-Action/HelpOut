# HelpOut

HelpOut is a comprehensive platform for community management. With features to assist tasks such as event management, fundrasing, community management, and more.

## About

Our project aims to solve the hassle of running volunteering communities through a web-application solution. Notable features include forming events, organizing donations/fundraising, managing daily tasks for individual volunteers, and more. It is hoped that our web application can accelerate the operations of volunteering communities everywhere, who are positively impacting the lives around them.

## Watch the Trailer

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/77B_jcj-X-Y/0.jpg)](https://www.youtube.com/watch?v=77B_jcj-X-Y)

## Features

Our web-app allows volunteering communities to:

- Conduct/establish events with informations, peers selection for tasks, and upload materials (event flow)
- Setup fundraisings with a website page that displays QR to donate and counts online donations, both events and fundraisings goes straight into the schedule calendar (fundraisings flow).
- Store necessary materials in libraries for bookkeeping (libraries flow).

For volunteering members, the web app allows them to:

- Join a community
- Attend and do tasks as assigned by the community.
- Access to materials and information from the community.(one big flow)

## Tech Stack

- Firebase
  Firebase is used for the back end and the database. We store all users, communities, events, and donations data into it. Firebase is used because of its simple implementation, robust built-in features, secure server, and it is in the cloud.
- Next.js
  Next.js is used in order to build the front-end aspect of the web app. It is one of the most frequently used framework in the field of web-development, and one of the simplest ones to implement.
- Tailwindcss
  Tailwindcss is a css framework to speed up the development time of the app by the virtue of the simplicity of the syntax. We use it to shorten the development time

## Prerequisites

- Node.js
- NPM (Node package manager)

## How to use it?

- First, clone the repository using this command
  > ```
  > git clone https://github.com/Edu-n-Action/HelpOut.git
  > ```
- Go to the web app directory by type
  > ```
  > cd HelpOut
  > ```
- Type this command to install all necessary module
  > ```
  > npm i
  > ```
- Start the server by typing
  > ```
  > npm run dev
  > ```
- Then we can open the web app on `http://localhost:3000` to see the result.
- You good to go

#### Login / Sign Up

- Go to the main page
- Select the account type you want (personal / community)
- Click login / sign up
- Enter the your email and password / choose option login / sign up with google
- Then, you can start enter your account information later on

### For Personal Account

#### Joining a community

- You can start join a community by clicking the home page and search all available community
- After that, you can apply to the community and just wait for the community to accept your application
- You can only apply to one community per account

#### Attend / Permit an Event

- Go to the event page
- Select an event
- Choose attend / permit the event

### For Community Account

#### Create an Event

- Go to the homepage
- Select the events button
- Tap the add button on the bottom corner
- Enter all necessary information of the new event save

#### Create a donation

- Go to the homepage
- Select the fundraising button
- Tap the add button on the bottom corner
- Enter all necessary information of the donation and save
- Your donation box will be live automatically on the web app

#### Upload event's material to the library

- Go to the community section
- Choose library
- Choose the add button on the bottom of the last material
- Enter the title and upload the material to the web app

### For Donating to the Community

- Go the the donation link
- Click the donate button
- Scan the qr code provided and enter the amount of money
- Your donation will be sent directly to the community

## Deployment

We also have already provided the web app on [https://helpout-id.vercel.app/](https://helpout-id.vercel.app/)

## Meet the Team

- Salman Faiz Hidayat (Hustler)
- Ken Bima Satria Gandasasmita (Hipster)
- Wafi Afdi Alfaruqi (Hacker)
- Polikarpus Arya Pradhanika (Hacker)
