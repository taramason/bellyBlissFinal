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
	      "message": "For specific times and locations, please visit our",
        "highlight": "schedule."
      }],
	  kidsClasses: [{
		    "title": "Parent and Toddler Yoga",
		    "description": "Parent and Toddler yoga is a fun active hour for you and your little one. It is never to early to introduce your child to the practice of Yoga! Class is broken into 2 parts, first toddlers are taught Yoga through song, dance, stories and animals. Yoga helps build strength, balance, coordination, confidence and patience. The second half of the class toys are brought out and children play while the adults practice. This time of class can get a little hectic but is always fun and the kids love to play with new toys keeping themselves surprisingly busy. This class is ideal for toddlers ages 1 to 5 years. Pre-mobile babies in carriers are welcome at no charge. Additional children are $6. For parents, this class is a special opportunity to meet others, get support, and learn about their toddler's emerging personality. No yoga experience required.",
        "picture": "pics/baby-mamma-yoga.jpeg",
        "location-border": "cherryCreekBorder"
	    }],
    fitnessClassesTitle: [{
	      "heading": "Fitness Classes",
	      "message": "To sign up for any of these classes, please visit our",
        "highlight": "schedule."
      }],
	   fitnessClasses: [{
		    "title": "Mamma Shred",
		    "description": "An all-levels workout will include fun cardio that you and your baby will enjoy, along with sculpting moves to torch your mommy muscles. We will focus on functional circuit training, cardiovascular interval training suitable for all mamas, and core restoration techniques to help you recover from birth and beyond. Safe for post-Cesarean birth, prolapse, and can help heal a Diastasis. Bring your carrier for the option to wear baby and/or bring a blanket to place baby on   during class. Babies still in bellies are also welcome!",
        "picture": "pics/baby-mamma-yoga.jpeg",
        "location-border": "stapletonBorder"
	    },
      {
        "title": "Belly Yoga",
		    "description": "A comprehensive Prenatal Yoga class focused on preparing women physically, mentally and emotionally for the beautiful process of childbirth and motherhood. This class will increase strength, physical and mental endurance, flexibility, breath and body awareness, while reducing fatigue and improving relaxation. Prenatal Yoga also helps reduce back pain and other common ailments associated with pregnancy such as nausea, tights hips, and heartburn.",
        "picture": "pics/belly-yoga.jpeg",
        "location-border": "stapletonBorder"
      },
      {
        "title": "Fusion Sculpt",
		    "description": "Fusion is a fun and unique class that combines Yoga, cardio, weight training, Pilates & Barre. This energetic and challenging class is great for sculpting, building strength, stamina, balance and flexibility throughout your pregnancy as well as postnatal for weight loss. Pre-crawlers are welcome in class.",
        "picture": "pics/fusion-sculpt.jpg",
        "location-border": "stapletonBorder"
      },
      {
        "title": "Barre Sculpt",
		    "description": "Barre classes are fun and invigorating classes that are focused on sculpting long, lean muscles, building strength, creating a strong core and a toned lifted booty. Barre classes are also a great cardiovascular workout that incorporates flexibility. The Barre Sculpt classes are designed for prenatal and postnatal women. Postnatal mamas are welcome to bring their babies to class. The Barre classes are a challenging workout for women in all stages, even with older children since you use your body weight you will always be able to move deeper and work harder in the exercises as you get stronger.",
        "picture": "pics/barre-sculpt.jpg",
        "location-border": "stapletonBorder"
      }

    ]
  });
});

//write function to change location-border to be actual location

module.exports = router;
