var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Belly Bliss',
    carouselSections: [{
        "heading": "We are your Village",
        "message": "Prenatal Yoga, Mommy & Me Yoga, Toddler Yoga, Childbirth Education, Doulas, Massage, Acupuncture, Chiropractic, Lactation Support and much more."
    }],
    sections: [{
  			"heading": "Specials!",
  			"subHeading": "Christmas Special",
  			"message": "Get a 90-minute massage and three classes for $140, a savings of $45!",
  			"picture": ""
  		},
  		{
  			"heading": "Workshops",
  			"subHeading": "",
  			"message": "In addition to Childbirth Education, Belly Bliss offers a variety of workshops.",
  			// "picture": "pics/baby-mamma-yoga.jpeg"
  		},
  		{
  			"heading": "",
  			"subHeading": "",
  			"message": "",
  			"picture": " "
  		}],
    kidsClassesTitle: [{
	      "heading": "Kids Classes",
	      "message": "To sign up for any of these classes, please visit our",
        "highlight": "schedule."
      }],
	  kidsClasses: [{
		    "title": "Parent and Toddler Yoga",
		    "description": "Parent and Toddler yoga is a fun active hour for you and your little one. It is never to early to introduce your child to the practice of Yoga! Class is broken into 2 parts, first toddlers are taught Yoga through song, dance, stories and animals. Yoga helps build strength, balance, coordination, confidence and patience. The second half of the class toys are brought out and children play while the adults practice. This time of class can get a little hectic but is always fun and the kids love to play with new toys keeping themselves surprisingly busy. This class is ideal for toddlers ages 1 to 5 years. Pre-mobile babies in carriers are welcome at no charge. Additional children are $6. For parents, this class is a special opportunity to meet others, get support, and learn about their toddler's emerging personality. No yoga experience required.",
        "picture": "pics/baby-mamma-yoga.jpeg",
        "location": "Cherry Creek"
	    }],
    mammaClassesTitle: [{
	      "heading": "Kids Classes",
	      "message": "To sign up for any of these classes, please visit our schedule.",
      }],
	   mammaClasses: [{
		    "title": "Parent and Toddler Yoga",
		    "description": "Parent and Toddler yoga is a fun active hour for you and your little one. It is never to early to introduce your child to the practice of Yoga! Class is broken into 2 parts, first toddlers are taught Yoga through song, dance, stories and animals. Yoga helps build strength, balance, coordination, confidence and patience. The second half of the class toys are brought out and children play while the adults practice. This time of class can get a little hectic but is always fun and the kids love to play with new toys keeping themselves surprisingly busy. This class is ideal for toddlers ages 1 to 5 years. Pre-mobile babies in carriers are welcome at no charge. Additional children are $6. For parents, this class is a special opportunity to meet others, get support, and learn about their toddler's emerging personality. No yoga experience required.",
        "picture": "pics/baby-mamma-yoga.jpeg",
        "location": "Cherry Creek"
	    }]
  });
});

module.exports = router;
