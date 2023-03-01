<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TheZone Productions - Events</title>
    <style>
    
        body {
            font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
            margin: 0;
            padding: 0;
            background-color:white;
        }

        .header {
            background-color: rgb(10, 5, 48);
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
        }

        .header img {
            width: 50px;
            height: 50px;
        }

        .header a {
            color: white;
            text-decoration: none;
            padding: 10px;
        }

        .header a:hover {
            background-color: rgb(52, 69, 104);
        }
        
        h2{
            color: black;
            text-align: center;
        }
        
        .container {
            max-width: 10000px;
            margin: 20px auto;
            padding: 20px;
            display: flex;
            justify-content: space-between;
        }

        .event {
            width: 55%;
            height: 450px;
            margin-bottom: 20px;
            padding: 10px;
            border: none;
            display: inline-block;
            margin-right: 10px;
        }

        .event h2 {
            margin-top: 0;
        }

        .event-left {
            float: left;
            margin-right: 20px;
        }

        .event-right {
            float: right;
            margin-left: 20px;
}
        .event p {
            margin: 10px 0;
            color: black;
        }

        .event-date {
            font-weight: bold;
            margin-bottom: 5px;
            text-align: center;
        }

        .event-location {
            margin-top: 5px;
            text-align: center;
        }
        .event img{
            width: 100%;
            height: auto;
            margin-bottom: 10px;

        }
        .event button {
            display: block;
            margin-top: 10px;
            padding: 5px;
            background-color: rgb(10, 5, 48);
            color: white;
            border: none;
            cursor: pointer;
        }

        .event button:hover {
         background-color: rgb(52, 69, 104);
        }


        .logo {
            display: inline-block;
            margin-left: 20px;
            width: 50px;
            height: 50px;
        }
        img{
            
        }

        .move-down {
             margin-top: 20px; 
        }
</style>
</head>
<body>
    <div class="header">
        <h1>TheZone Productions</h1>
        <div>
            <a href="/index.html">Home</a>
            <a href="/about.html">About</a>
            <a href="/releases.html">Releases</a>
            <a href="/contact.html">Contact</a>
        </div>
    </div>
    
    <div class="events">
     <u>
        <h2> Events</h2>
     </u>
    </div>

    <div class="container">
        <div class="event">
            <h2> Summer Festival </h2>
            <img src="https://www.theeventumbrella.com/app/uploads/2021/12/WEWORK-18-FANATIC-RICHARDJOHNSON-176-min-scaled.jpg" alt="Event 1">
            <p class="event-date">August 15th, 2023</p>
            <p class="event-location">TheZone Productions, New York City</p>
            <br>
            <p>Join us for an unforgettable day of live music and fun in the sun at our Summer Music Festival! Featuring top artists from around the world and plenty of food and drinks, this is an event you won't want to miss.</p>
            <button>Buy Tickets</button>
        </div>

        <div class="event">
            <h2> July 4th Music Showcase </h2>
            <img src="https://imageio.forbes.com/specials-images/imageserve//62b9ad45894816c109b02360/0x0.jpg?format=jpg&crop=747,499,x0,y0,safe&width=1200" alt="Event 2">
            <p class="event-date">July 4th, 2023</p>
            <p class="event-location">TheZone Productions, New York City</p>
            <br>
            <p>Get a taste of the hottest up-and-coming musical acts at our July 4th Music Showcase, taking place at our outdoor Music Terrace. With a diverse lineup of performers and an intimate atmosphere, this is an event that music lovers won't want to pass up.</p>
            <button>Buy Tickets</button>
        </div>

        <div class="event">
            <h2> Acoustic Night </h2>
            <img src="https://thumbs.dreamstime.com/b/acoustic-guitar-male-musician-night-club-63356168.jpg" alt="Event 3">
            <p class="event-date">December 10th, 2023</p>
            <p class="event-location">TheZone Productions, New York City</p>
            <br>
            <p> Join us for an evening of soulful acoustic music with some of the best local artists. Sit back, relax, and enjoy the intimate atmosphere as you listen to stripped-down versions of your favorite songs. Whether you're a die-hard fan of acoustic music or just looking for a unique night out, this event is not to be missed!
            </p>
            <button>Buy Tickets </button>
        </div>

        <div class="event">
            <h2> New Years New Talent </h2>
            <img src="https://rare-gallery.com/uploads/posts/580127-audience-band.jpg" alt="Event 4">
            <p class="event-date">January 4th, 2024</p>
            <p class="event-location">TheZone Productions, New York City</p>
            <br>
            <p> Start off the new year with a bang by discovering the hottest up-and-coming talent in the city. From singers and dancers to comedians and poets, this showcase is a celebration of creativity and innovation. Who knows, you might even witness the next big thing before they hit it big! Don't miss your chance to be a part of the excitement and see what the future of entertainment looks like.</p>
            <button>Buy Tickets</button>
        </div>

    </div>
</body>
</html>
