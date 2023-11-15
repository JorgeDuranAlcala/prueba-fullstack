## how to run the project

## install the database

<a href="https://www.apachefriends.org/download.html">Download Xampp</a>

<h2>Run the mysql and apache servers before running the backend</h2>
<h3>Steps to follow to create the DB</h3>

<ul>
    <li>Navigate to http://localhost/phpmyadmin</li>
    <li>Create a DB called <strong>'prueba'</strong> </li>
    <li>Click the Import button and select the sql file located in the root dir of this project called <strong>"prueba.sql"</strong> </li>
</ul>

## installation backend

<code>
cd backend
npm install
npm run start:dev
</code>

## installation frontend

<code>
cd fronted
npm install
npm run dev
</code>

## docker

docker compose up
