const controller = require('../controllers/controller')
const {Router} = require('express');

const router = Router();

//
// 9. Create URL: Implement an endpoint to create a new shortened URL.
// 10. Get List of URLs: Implement an endpoint to retrieve a list of all URLs.
// 11. Get URL with Stats: Implement an endpoint to retrieve a specific URL and its statistics.
// 12. Update URL: Implement an endpoint to update an existing URL.
// 13. Delete URL: Implement an endpoint to delete a URL.





// router to get all the urls
router.get('/shortened',controller.getUrls);

// router to get URL with Stats:
router.get('/shortened/:id', controller.getUrl);
// router for creating url
router.post('/shorten', controller.createUrl);

// router for updating
router.put('/shortened/:id', controller.updateUrl);
//router for deleting the url
router.delete('/shortened/:id', controller.deleteUrl);


// router for redarecting
router.get('/:code', controller.redirect);

module.exports=router;