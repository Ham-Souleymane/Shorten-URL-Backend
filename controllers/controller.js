const shortUrlDb = require('../models/modle');
const crypto = require('crypto');

function generateShortCode(length=6) {
    return crypto.randomBytes(length).toString('base64').replace(/\W/g, "").slice(0, length);
}

const createUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json({
                error: 'URL is required'
            });
        }

        // Check if URL is valid
        try {
            new URL(originalUrl);
        } catch (err) {
            return res.status(400).json({ error: 'Invalid URL format' });
        }

        // Check if the URL already exists in the database
        const existingUrl = await shortUrlDb.findUrl(originalUrl);

        // If URL already exists, return the existing short URL
        if (existingUrl) {
            return res.json({
                shortUrl: `http://localhost:3000/${existingUrl.short}`
            });
        }

        // Otherwise, generate a new short code
        let shortcode;
        let exists = true;

        do {
            shortcode = generateShortCode();
            const checkExists = await shortUrlDb.checkExists(shortcode);
            exists = !!checkExists; // Convert to boolean
        } while (exists);

        // Create the new URL in the database
        const newUrl = await shortUrlDb.createUrl(originalUrl, shortcode);

        res.json({
            shortUrl: `https://shorten-url-backend-jg04.onrender.com/${newUrl.code}`
        });
    } catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
const getUrls = async (req, res) => {
const data = await shortUrlDb.getUrls();
return res.status(200).json({
    shortUrls: data
})
}
getUrl=async (req, res) => {
    const id = req.params.id;
    const data= await shortUrlDb.findOne(id);
    if (!data) {
        return res.status(404).json({
            error: 'No such shortUrl'
        })
    }
    return res.status(200).json({
        shortUrl: data
    })
}

updateUrl=async (req, res) => {
    const id = req.params.id;
    const { newOriginalUrl } = req.body;
    if (!newOriginalUrl) {
        return res.status(400).json({ error: "New URL is required" });
    }

    const data= await shortUrlDb.findOne(id);
    if (!data) {
        return res.status(404).json({
            error: 'No such shortUrl'
        })
    }

    try {
        new URL(newOriginalUrl);
    } catch (err) {
        return res.status(400).json({ error: 'Invalid URL format' });
    }
    await shortUrlDb.updateOriginalUrl(id, newOriginalUrl);
  return res.status(200).json({
      mesage: 'the url updated successfully',
  })

}


deleteUrl=async (req, res) => {
    const id = req.params.id;
    let existingUrl = await shortUrlDb.findOne(id);
    if (!existingUrl) {
        return res.status(404).json({
            error: 'No such shortUrl'
        })
    }
    await shortUrlDb.deleteUrl(id);
    return res.status(200).json({
        message: 'Successfully deleted shortUrl'
    })


}

redirect = async (req, res) => {
    const code = req.params.code;
    const data = await shortUrlDb.checkExists(code);

    if (!data) {
        return res.status(404).json({
            error: 'No such shortUrl'
        });
    }
    await shortUrlDb.incrementClicks(code);


    res.redirect(data.original);
};

module.exports = {
    createUrl,
    getUrls,
    getUrl,
    deleteUrl,
    updateUrl,
    redirect
};