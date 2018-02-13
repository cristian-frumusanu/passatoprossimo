console.log( 'inside service worker' );

self.addEventListener( 'install', function( e ) {
    e.waitUntil(
        caches.open( 'passatoProssimo' ).then( function( cache ) {
            return cache.addAll([
                '../../index.html',
                '../css/style.css',
                'main.js',
                'verbs.js',
                'vue.min.js'
            ]);
        })
    );
});

self.addEventListener( 'fetch', function( event ) {
    console.log( 'fetch: ' + event.request.url );

    event.respondWith(
        caches.match( event.request ).then( function( response ) {
            return response || fetch( event.request );
        })
    );
});