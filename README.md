# CINEMADDICTED

A website that allows you to do... um... whatever TheMovieDatabase API lets you to do, I don't know yet. The idea is to let user add movies to wishlist, maybe write and read reviews too. We'll see

## commit 2
Big update! So
- TMDB API is now put to use
- TMDB authorization
- Movie page is functional for any movie id, which means we got:
    - Backdrops and posters (no videos yet)
    - Reviews from TMDB users
    - Watchlist and favorite buttons are now functional
    - Actor list
    - Fully functional rating (you can give different rating to a movie, but not a review)
    - Similar movies section
- Watchlist and favorite lists, you can add and remove 
There's still some minor stuff to do regarding both movie page and movie lists... But hey, it w o r k s ???? 
### Because there's no proper "discover" page, you need to type "/movie/[insert_your_movie_id]" to see a movie page. yyyah
Available paths:
- Welcome page (path '/')
- Movie page (path '/movie/[insert_your_movie_id]')
- Non-functional movie search list (path '/list/')
- Account page (path '/account/')
- Authorization page (paths '/gototmdb' and 'successtmdb')

## commit 1
Nothing really works, API isn't used yet, all there is is some non-functional unfinished pages, which are:
- Welcome page (path '/')
- Movie page (path '/movie/')
- Movie search list (path '/list/')
- Register and login pages (paths '/register/' and '/login')

## What's next?
- Add "remove rating" option
- Add pagination to movie lists
- Add "rated movies" list
- Make actually working "discover movies" page
- Figure out how to do TV pages with less codes bruhhhh
- Code cleanup
- Don't die

## How to launch?
uhh... Run these commands in your console
```
npm install
npm run dev
```
After that you'll see a message with a localhost link. Just visit this link on your website
