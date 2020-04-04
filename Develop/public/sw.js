const CACHE = "budget_cache";

const Files_To_Cache = [
    "/",
    "index.js"
];


self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE).then(function(cache) {
          return cache.addAll(Files_To_Cache);  
        })
    );
})
 
// event listener for "fetch"
// cache the data being passed around
// put cached data in the database when connection is restored (back online)

// self.addEventListener("fetch")