# How-to start the app?

# Linux + Docker || MacOS + Docker || Windows + Docker:
1. Clone repository to your computer.

2. Go to the root folder.

3. type in terminal `make showtime`.

4. localhost:8000/admin to check the database inside with the users created 
`login: root & password: root`

# Something happened with my Docker and I can't look at your app!
1. chmod u+x setup.sh

2. ./setup.sh

3. And now you know that I also can write scripts.

# Features
1. You can change theme. (NavBar check out the sun icon)
2. You can search for the articles.
3. Infinity scroll
4. Creation of the users and storing email with the key.


## What this project not trying to be?

I really like the concept with the news, but I just don't like the idea of gathering Email and the Key since
I see ways of how I can benefit from the app in the future, and for that project I will not need authentication of this sort.
I want this app to be future microservice instead.

I could take out old projects with the authentication and then 
start with the access_token and refresh_token. Then encrypt the password / key. 
Silently crying that I will need to then remove all of that because I won't use it.

1. Create the .env file to store sensitive data.
2. Create it by my own script, and then make you input request.
3. Setup CI/CD with Jenkins.
4. K8S with orchestration.
5. Next.js with SSR so it can run even on the microwave.
6. Write behavioral/unit tests.
7. Test my Django.
8. Advanced filtration of the articles and sources.
9. More variety of the grids.
10. Different sections for the text based articles.
11. Put a lot of the validation and more test cases for the security, honeypots, monitoring tools...
12. Support for multiple themes.
13. Written animations.
14. Analysis of the competitors.
15. Encryp/Decrypt/compare salts for the DB.
16. ...

And... I can do it, I know how-to do it, I did it. But with this one I wanted to have fun.

If you will encounter the bug please be so kind to tell me about that. It will be intersting to just see for myself where I could do better. Suggestions for improvements are welcome.

Have an awesome day!