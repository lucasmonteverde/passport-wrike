# Passport-Wrike

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Wrike](http://wordpress.com) using the OAuth 2.0 API.

## Install

    $ npm install passport-wrike

## Usage

#### Configure Strategy

The Wrike authentication strategy authenticates users using a Wrike
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new WrikeStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ WrikeId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authorize()`, specifying the `'Wrike'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/wrike',
      passport.authorize('wrike'));

    app.get('/auth/wrike/callback', 
      passport.authorize('wrike', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Thanks

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Lucas Monteverde <[http://github.com/lucasmonteverde](http://github.com/lucasmonteverde)>