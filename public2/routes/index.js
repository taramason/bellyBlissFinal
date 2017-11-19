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
	  kidsClasses: [
      {
		    "title": "Parent and Toddler Yoga",
		    "description": "Parent and Toddler yoga is a fun active hour for you and your little one. It is never to early to introduce your child to the practice of Yoga! Class is broken into 2 parts, first toddlers are taught Yoga through song, dance, stories and animals. Yoga helps build strength, balance, coordination, confidence and patience. The second half of the class toys are brought out and children play while the adults practice. This time of class can get a little hectic but is always fun and the kids love to play with new toys keeping themselves surprisingly busy. This class is ideal for toddlers ages 1 to 5 years. Pre-mobile babies in carriers are welcome at no charge. Additional children are $6. For parents, this class is a special opportunity to meet others, get support, and learn about their toddler's emerging personality. No yoga experience required.",
        "picture": "pics/baby-mamma-yoga.jpeg",
        "location-border": "cherryCreekBorder"
	    },
      {
		    "title": "BYOBaby",
		    "description": "An excellent class for busy mothers, allowing moms to enjoy Yoga, introduce their baby to the practice and promote mother and baby bonding. This Yoga class for mom is focused on her post-partum body and includes poses that are interactive with baby. Practicing Yoga with your baby will help with babies development, relieves babies gas, refulx and colic and establish good sleeping habits. This class is ideal for pre-crawlers. $6 additional charge for 2nd baby.",
        "picture": "pics/byobaby.jpg",
        "location-border": "cherryCreekBorder"
	    },
      {
		    "title": "Mommy and Me Music Movement",
		    "description": "Caregivers and their children will participate in activities through music, play, and movement. Siblings welcome with $6 charge for additional child.",
        "picture": "pics/music-movement.jpeg",
        "location-border": "cherryCreekBorder"
	    },
      {
		    "title": "Music Playtime",
		    "description": "Drop-in for this fun, creative music playtime weekly. We will dance, jam and explore music of all kinds together. Children of all ages enhance both gross and fine motor skills through musical play. In this class, children of ages 1-5 years will learn basic music themes such as rhythm and tone, and will explore their favorite themes and stories. Each class will include some movement and dancing, so come ready to rock out and boogie! ",
        "picture": "pics/music-playtime.jpg",
        "location-border": "cherryCreekBorder"
	    }
    ],
    fitnessClassesTitle: [{
	      "heading": "Fitness Classes",
	      "message": "To sign up for any of these classes, please visit our",
        "highlight": "schedule."
      }],
	   fitnessClasses: [
       {
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
      },
      {
        "title": "Prenatal and Postnatal Pilates",
		    "description": "Pilates can be one of the best exercises to do during  pregnancy and after. Pilates builds your abdominal, back, hip and pelvic floor muscles to support a more comfortable pregnancy and delivery. Join us for this Pilates mat class and get ready to strengthen, tone and stretch your muscles while burning calories and gaining comfort. ",
        "picture": "pics/pre-post-pilates.jpg",
        "location-border": "stapletonBorder"
      },
      {
        "title": "Yoga Nidra",
		    "description": "This is an easy relaxation technique to help root down and revive the body. Practicing Yoga Nidra involves settling onto the mat by lying on your back/your side/on a bolster for the duration of class, while the instructor guides you through a reviving meditation. This class helps reset the nervous system, activates breath, prepares the mind for sleep, and gives the overall body a time to slow down. Yoga Nidra is available to both Prenatal and Postnatal.",
        "picture": "pics/barre-sculpt.jpg",
        "location-border": "stapletonBorder"
      },
      {
        "title": "",
        "description": "",
        "picture": "pics/barre-sculpt.jpg",
        "location-border": "stapletonBorder"
      },
      {
        "title": "",
        "description": "",
        "picture": "pics/barre-sculpt.jpg",
        "location-border": "stapletonBorder"
      },
      {
        "title": "",
        "description": "",
        "picture": "pics/barre-sculpt.jpg",
        "location-border": "stapletonBorder"
      },
      {
        "title": "",
        "description": "",
        "picture": "pics/barre-sculpt.jpg",
        "location-border": "stapletonBorder"
      }
    ]
  });
});

//write function to change location-border to be actual location

module.exports = router;
