/**
 * MEDIEVAL CANE CORSO — SITE DATA
 * ---------------------------------------------------------------
 * This file is the single source of truth for editable content:
 * dogs, litters/puppies, reviews, certifications, FAQs, and the
 * gallery. Update values here and every page that uses them
 * (home, our-dogs, puppies-litters, gallery, certifications,
 * reviews, faq) will reflect the change automatically.
 *
 * Image paths are relative to the site root (e.g. "images/dogs/...").
 * To add a photo: drop the file in the matching /images/ folder and
 * reference its filename below.
 * ---------------------------------------------------------------
 */

const SITE_DATA = {

  business: {
    name: "Medieval Cane Corso",
    shortName: "Medieval Cane Corso",
    tagline: "Exceptional Cane Corsos, Raised with Purpose",
    city: "Surrey",
    region: "British Columbia",
    country: "Canada",
    serviceArea: "Based in Surrey, BC — welcoming suitable families across Canada, the United States, and internationally",
    phone: "604-679-2362",
    phoneHref: "tel:+16046792362",
    email: "MedievalCaneCorsos@gmail.com",
    emailIsPlaceholder: false,
    instagramHandle: "@medievalcanecorsos",
    instagramUrl: "https://www.instagram.com/medievalcanecorsos",
    // Response-time / hours were not provided by the breeder — left as a labeled placeholder.
    hoursNote: "We respond to inquiries as quickly as possible, typically within 1–2 business days.",
    hoursIsPlaceholder: true
  },

  breeder: {
    // Only a first name ("Robbie") was confirmed via a customer review.
    // TODO: confirm full name / preferred title for the About page byline.
    firstName: "Robbie",
    photo: "images/puppies/breeder-with-puppy-dock.jpg",
    photoAlt: "Robbie, the breeder behind Medieval Cane Corso, sitting on a dock with a Cane Corso puppy in front of a lake and mountain backdrop"
  },

  philosophy: {
    heading: "Our Philosophy",
    paragraphs: [
      "We are a small, purpose-driven breeding program built on intention—not volume.",
      "Our program is centered around a carefully selected foundation pairing, chosen for complementary structure, sound temperament, and overall balance. From this foundation, we focus on producing consistent, well-developed Cane Corso while continuing to evaluate and refine our program over time.",
      "Each dog is raised in a structured, hands-on environment designed to develop confidence, stability, and real-world adaptability from the very beginning. Early socialization is a priority, ensuring our dogs can integrate into family life while preserving the natural instincts and defining characteristics of the breed.",
      "Our goal is simple: to produce healthy, stable Cane Corsos that are calm, confident, and deeply loyal—dogs that can live as reliable companions while maintaining their natural protective instincts."
    ]
  },

  whyUs: {
    heading: "Why Medieval Cane Corso",
    paragraphs: [
      "Choosing the right breeder is just as important as choosing the right dog. At Medieval Cane Corso, our focus extends beyond breeding—we are committed to producing dogs with purpose and placing them with equal care.",
      "Every puppy is the result of a deliberate pairing, selected to produce sound structure, stable temperament, and long-term reliability. We prioritize quality over quantity, ensuring each dog receives the attention and foundation it needs to succeed.",
      "We are committed to transparency, health, and ongoing support. From your first inquiry to life with your dog, we remain available as a resource and stand behind every puppy we produce.",
      "Our placement process is intentional. We take the time to match each puppy with homes that are prepared to provide structure, consistency, and long-term commitment—because the right environment is essential to the success of the dog."
    ]
  },

  healthPhilosophy: {
    heading: "Health, Longevity & Responsible Breeding",
    paragraphs: [
      "In our program, health, sound structure, and stable temperament are treated as foundational priorities. Our stud, Sir Shadow, has completed OFA health testing for hips, elbows, and cardiac, contributing to the foundation we are building within our program.",
      "As we continue to develop, we are actively working toward expanding health testing across our dogs and future generations. Each pairing is carefully considered with the goal of improving overall soundness, consistency, and long-term health.",
      "Early results are in line with our goals, with dogs showing balanced structure, efficient movement, and stable, confident temperaments. We remain committed to ongoing evaluation, thoughtful decision-making, and transparent, responsible breeding practices as our program evolves."
    ],
    photo: "images/gallery/gallery-adult-treadmill-training.jpg",
    photoAlt: "Adult Cane Corso standing on a conditioning platform during a structured training session"
  },

  breedOverview: {
    heading: "Breed Overview & Temperament",
    paragraphs: [
      "The modern Cane Corso is a relatively young, carefully reconstructed Italian breed — not an unbroken ‘ancient Roman war dog.’ In the 1970s and 1980s, dedicated Italian enthusiasts, including Dr. Paolo Breber, went farm to farm across southern Italy looking for dogs that still showed the traditional type and temperament. Those dogs were purchased or brought into their programs as foundation stock and studs, and from there a structured breeding effort rebuilt and standardized the Cane Corso we know today. Historically, these dogs worked as multipurpose farm and property guardians: moving livestock, protecting the homestead, and deterring threats. Today's Cane Corso keeps that heritage — powerful, athletic, highly observant, and naturally protective — and is best suited to experienced, committed homes that value training, structure, and responsible breeding.",
      "Today's Cane Corso is a powerful, highly intelligent guardian that bonds deeply with its family and is naturally reserved with strangers. They were developed to think independently, protect property and livestock, and work closely with their handler. This makes them loyal, affectionate companions in experienced hands – but they absolutely require firm, fair leadership, early and ongoing socialization, and consistent training to stay stable, confident, and under control."
    ],
    photo: "images/gallery/gallery-puppy-wildflowers.jpg"
  },

  rightForYou: {
    heading: "Is the Cane Corso Right for You?",
    paragraphs: [
      "The ideal Cane Corso home is experienced with large, working breeds and committed to providing structure, training, and consistency. These dogs require time, stability, and clear boundaries to develop into balanced, reliable companions.",
      "This is not a breed suited for those looking for an “easy” dog, frequent off-leash freedom in uncontrolled environments, or a guardian without daily involvement. The Cane Corso thrives in homes that understand leadership, engagement, and responsibility.",
      "A well-bred Cane Corso can be an exceptional companion—but only in the right environment, with the right expectations and level of commitment. If you're unsure, it's worth taking the time to ask questions and fully understand the breed before making a decision."
    ]
  },

  understandingBreed: {
    heading: "Understanding the Breed",
    paragraph: "Responsible ownership begins with a proper understanding of the Cane Corso. Here, we provide a straightforward overview of the breed, its heritage, and the standard of homes best suited for our dogs."
  },

  slideshowImages: [
    { file: "images/slideshow/slide-01-cane-corso-forest-portrait.jpg", alt: "Adult Cane Corso sitting alertly on a red leash with a forest backdrop", caption: "Powerful, composed, and deeply loyal." },
    { file: "images/slideshow/slide-02-cane-corso-lying-field-bc.jpg", alt: "Cane Corso lying in a grass field with a Lower Mainland, BC backdrop", caption: "Raised on the land they'll help protect." },
    { file: "images/slideshow/slide-03-cane-corso-autumn-leaves.jpg", alt: "Cane Corso sitting among autumn leaves in a forest setting", caption: "Structure and stability, generation after generation." },
    { file: "images/slideshow/slide-04-cane-corso-entryway.jpg", alt: "Cane Corso standing at an elegant stone entryway", caption: "A guardian breed, raised with purpose." },
    { file: "images/slideshow/slide-05-cane-corso-lawn-hedge.jpg", alt: "Cane Corso standing on a manicured lawn", caption: "Balanced structure, calm confidence." },
    { file: "images/slideshow/slide-06-cane-corso-puppy-red-leash.jpg", alt: "Cane Corso puppy lying on grass, looking directly at the camera", caption: "Every puppy raised hands-on, from day one." },
    { file: "images/slideshow/slide-07-cane-corso-car-seat.jpg", alt: "Adult Cane Corso sitting attentively", caption: "Loyal companions for the right home." },
    { file: "images/slideshow/slide-08-cane-corso-puppy-closeup.jpg", alt: "Close-up of a Cane Corso puppy's face", caption: "The beginning of a lifelong bond." },
    { file: "images/slideshow/slide-09-breeder-puppy-dock.jpg", alt: "Robbie, the breeder behind Medieval Cane Corso, with a puppy on a dock overlooking a lake", caption: "Small, purpose-driven, hands-on." },
    { file: "images/slideshow/slide-10-cane-corso-puppy-portrait.jpg", alt: "Cane Corso puppy portrait outdoors", caption: "Health, temperament, and structure — from the start." }
  ],

  dogs: [
    {
      id: "sir-shadow",
      name: "Sir Shadow",
      role: "Foundation Sire",
      sex: "Male",
      dob: "2022-06-10",
      dobDisplay: "June 10, 2022",
      registration: "ICCF2404786 (ICCF Registered)",
      bio: [
        "Sir Shadow is the foundation sire of the Medieval Cane Corsos breeding program, carefully selected for his athleticism, exceptional structure, and the consistency with which he passes these qualities on to his offspring.",
        "He possesses a balanced headpiece with a short-to-medium muzzle and an excellent muzzle-to-skull ratio, a clean topline, and effortless, fluid movement. His temperament is stable, confident, and clear-headed, demonstrating strong environmental resilience and an excellent ability to settle when not working.",
        "Sir Shadow is ICCF registered and has undergone comprehensive health testing, including OFA evaluations of his hips and elbows, along with cardiac screening. His proven health, sound structure, and dependable temperament provide a strong foundation for producing healthy, well-balanced Cane Corso puppies that exemplify the Medieval Cane Corsos breeding program."
      ],
      healthTests: [
        { test: "OFA Hips", result: "Good", date: "2025-03-26" },
        { test: "OFA Elbows", result: "Normal", date: "2025-03-26" },
        { test: "OFA Cardiac", result: "Normal / Clear", date: "2025-03-24" }
      ],
      photos: [
        { file: "images/dogs/sir-shadow-01-standing-hedge.jpg", alt: "Sir Shadow, Cane Corso foundation sire, standing alert beside a cedar hedge" },
        { file: "images/dogs/sir-shadow-02-alert-hedge.jpg", alt: "Sir Shadow standing alert near a cedar hedge" },
        { file: "images/dogs/sir-shadow-03-lying-mossy-tree.jpg", alt: "Sir Shadow lying on a gravel path beside a large mossy tree" }
      ]
    },
    {
      id: "americanas-countess-elizabeth",
      name: "Americana's Countess Elizabeth",
      role: "Foundation Dam",
      sex: "Female",
      litters: "Dam of three successful litters",
      bio: [
        "Americana's Countess Elizabeth is the foundation female of the Medieval Cane Corsos breeding program, selected for her exceptional maternal instincts, balanced structure, and stable, breed-typical temperament. As the dam of three successful litters, she has consistently produced offspring displaying strong structure, sound temperaments, and excellent overall quality.",
        "Elizabeth possesses a balanced headpiece with an ideal muzzle-to-skull ratio, a clean topline, a broad, powerful chest, and tight, well-formed feet that contribute to her functional movement and athleticism. She is highly intelligent, thrives on mental stimulation, and displays the confidence and composure expected of a true Cane Corso.",
        "Her temperament reflects the traditional working character of the breed. Deeply devoted to her family and trusted friends, Elizabeth is affectionate and eager for attention, yet naturally aloof and discerning with strangers. She remains calm, composed, and predictable in a variety of environments while maintaining the natural guardian instincts that made the Cane Corso an invaluable farm dog throughout Italy.",
        "Perhaps Elizabeth's most defining quality is her dedication as a mother. She raises each litter with remarkable attentiveness, instinctively nursing, protecting, and nurturing her puppies from birth through weaning. Her exceptional maternal instincts have played a significant role in the consistency and quality of the Medieval Cane Corsos breeding program.",
        "With her combination of structural correctness, dependable temperament, intelligence, and proven production, Americana's Countess Elizabeth continues to be an invaluable foundation female in the Medieval Cane Corsos program."
      ],
      healthTests: [],
      photos: [
        { file: "images/dogs/elizabeth-01-autumn-leaves.jpg", alt: "Americana's Countess Elizabeth, Cane Corso foundation dam, sitting among autumn leaves" },
        { file: "images/dogs/elizabeth-02-lying-grass.jpg", alt: "Americana's Countess Elizabeth lying in grass near a fence line" }
      ]
    },
    {
      id: "medievals-luna",
      name: "Medieval's Luna",
      role: "Future / Developing Female",
      sex: "Female",
      bio: [
        "Medieval's Luna represents the direction and vision we are continuing to build toward within our program — producing athletic, functional Cane Corsos that preserve the traditional qualities of the breed.",
        "One of the qualities that immediately drew us to Luna is her traditional type and structure. She possesses a longer muzzle that reflects the classic Cane Corso found throughout Italy, along with a balanced skull-to-muzzle ratio, long legs, tight feet, and an athletic frame built for movement and function. Her correct proportions and natural athleticism represent the type of Cane Corso we strive to produce: powerful, balanced, and capable.",
        "Beyond her structure, Luna displays the temperament we value in our dogs. She is a confident, driven young female with a playful and energetic personality, but she also demonstrates a clear off-switch — able to bring intensity and focus when engaged while settling calmly in the home environment. This balance between drive and stability is essential for a true working companion.",
        "Luna is ICCF registered and follows the same structured health protocol as the rest of our program. OFA and related evaluations will be completed at the appropriate ages before any future breeding decisions are made, ensuring that health, temperament, and structure remain the foundation of our program moving forward."
      ],
      healthTests: [],
      photos: [
        { file: "images/dogs/luna-01-lying-field.jpg", alt: "Medieval's Luna standing outdoors in a private yard" }
      ],
    }
  ],

  litters: [
    {
      id: "fall-2026-shadow-elizabeth",
      sire: "Sir Shadow",
      dam: "Americana's Countess Elizabeth",
      expected: "Expected birth: September 7, 2026 · Ready: November 2, 2026",
      status: "Applications Open",
      startingPrice: "Females starting at $4,000 CAD · Males starting at $5,000 CAD",
      description: "This pairing was selected based on the consistent temperament and structure observed in previous litters, which aligned closely with our program goals. A $1,000 non-refundable deposit reserves a puppy and is applied toward the total purchase price.",
      image: "images/dogs/sir-shadow-01-standing-hedge.jpg"
    }
  ],

  availablePuppies: [],

  puppyGalleryTrio: [
    { file: "images/puppies/litter-puppy-grey-01.jpg", alt: "Grey Cane Corso puppy standing on grass in front of a hedge" },
    { file: "images/puppies/litter-puppy-lightgrey-02.jpg", alt: "Light grey Cane Corso puppy standing on grass in front of a hedge" },
    { file: "images/puppies/litter-puppy-black-03.jpg", alt: "Black Cane Corso puppy standing on grass in front of a hedge" }
  ],

  raisingProcess: {
    heading: "How Our Puppies Are Raised",
    paragraph: "From birth through placement, our puppies are raised hands-on in a home environment — never in a kennel or outbuilding. Early handling, gentle exposure to everyday household sounds and surfaces, and consistent, gentle interaction with people are part of daily life from the very beginning.",
    photos: [
      { file: "images/puppies/newborn-puppy-whelping-box.jpg", alt: "Newborn Cane Corso puppy wrapped in a blanket in the whelping area" },
      { file: "images/puppies/puppy-cozy-blanket.jpg", alt: "Cane Corso puppy resting under a blanket at home" },
      { file: "images/puppies/puppy-playpen-toys.jpg", alt: "Cane Corso puppy in an indoor play area with enrichment toys" },
      { file: "images/puppies/puppy-held-blanket.jpg", alt: "Cane Corso puppy being held gently, wrapped in a blanket" }
    ]
  },

  // Certifications are grouped one card per dog (not one card per test) so the page
  // shows a single photo of each dog alongside every certification/health test that
  // belongs to them, instead of repeating the same dog's photo across multiple cards.
  certifications: [
    {
      dogId: "sir-shadow",
      dogName: "Sir Shadow",
      photo: "images/dogs/sir-shadow-03-lying-mossy-tree.jpg",
      photoAlt: "Sir Shadow, the Cane Corso these certifications belong to",
      items: [
        {
          category: "Health Testing",
          title: "OFA Hip Evaluation",
          issuer: "Orthopedic Foundation for Animals (OFA)",
          dateOfReport: "2025-03-26",
          result: "Good",
          documentImage: "images/certifications/sir-shadow-ofa-hips-2025-03-26.jpeg",
          documentAlt: "Official OFA hip evaluation certificate for Sir Shadow showing a Good result",
          explanation: "This certificate documents that Sir Shadow's hips were radiographically evaluated by the Orthopedic Foundation for Animals, a widely recognized non-profit canine health-testing registry, with a consensus result of “Good” and no radiographic evidence of hip dysplasia."
        },
        {
          category: "Health Testing",
          title: "OFA Elbow Evaluation",
          issuer: "Orthopedic Foundation for Animals (OFA)",
          dateOfReport: "2025-03-26",
          result: "Normal",
          documentImage: "images/certifications/sir-shadow-ofa-elbows-2025-03-26.jpeg",
          documentAlt: "Official OFA elbow evaluation certificate for Sir Shadow showing a Normal result",
          explanation: "This certificate documents that Sir Shadow's elbows were evaluated by the OFA with a result of “Normal,” with no radiographic evidence of elbow dysplasia present."
        },
        {
          category: "Health Testing",
          title: "OFA Cardiac Exam",
          issuer: "Orthopedic Foundation for Animals (OFA)",
          dateOfReport: "2025-03-24",
          result: "Normal / Clear",
          documentImage: "images/certifications/sir-shadow-ofa-cardiac-2025-03-24.jpeg",
          documentAlt: "Official OFA cardiac certificate for Sir Shadow showing a Normal and Clear practitioner result",
          explanation: "This certificate documents a cardiovascular examination via auscultation performed on Sir Shadow, with the result “Normal / Clear — Practitioner” and no evidence of congenital or acquired heart disease noted at the time of exam. The OFA notes that because acquired heart disease can develop later, annual re-examination is recommended."
        },
        {
          category: "Registration",
          title: "ICCF Registration",
          issuer: "International Cane Corso Federation (ICCF)",
          dateOfReport: null,
          result: null,
          explanation: "Sir Shadow is registered with the International Cane Corso Federation (ICCF), documenting his pedigree within the breed registry."
        }
      ]
    },
    {
      dogId: "americanas-countess-elizabeth",
      dogName: "Americana's Countess Elizabeth",
      photo: "images/dogs/elizabeth-01-autumn-leaves.jpg",
      photoAlt: "Americana's Countess Elizabeth, foundation dam of the Medieval Cane Corso program",
      items: [
        {
          category: "Profile",
          title: "Foundation Female",
          issuer: "Medieval Cane Corso",
          dateOfReport: null,
          result: null,
          explanation: "Americana's Countess Elizabeth is a foundation breeding female in the Medieval Cane Corso program. Her available registration and pedigree information will be displayed here as it is prepared for publication."
        }
      ]
    },
    {
      dogId: "medievals-luna",
      dogName: "Medieval's Luna",
      photo: "images/dogs/luna-01-lying-field.jpg",
      photoAlt: "Medieval's Luna standing outdoors in a private yard",
      items: [
        {
          category: "Registration",
          title: "ICCF Registration",
          issuer: "International Cane Corso Federation (ICCF)",
          dateOfReport: null,
          result: null,
          explanation: "Medieval's Luna is registered with the International Cane Corso Federation (ICCF), documenting her pedigree within the breed registry."
        },
        {
          category: "Health Testing",
          title: "Health Testing Documentation",
          issuer: "Medieval Cane Corso",
          dateOfReport: null,
          result: null,
          explanation: "Medieval's Luna's health-testing documentation will be displayed here once her testing has been completed and the corresponding records are available for publication."
        }
      ]
    }
  ],

  reviews: {
    aggregateRating: 5.0,
    reviewCount: 21,
    source: "Google",
    googleReviewsUrl: "https://www.google.com/search?q=Medieval+Cane+Corsos",
    items: [
      {
        name: "Harry",
        rating: 5,
        source: "Google Review",
        verified: true,
        url: "https://share.google/ymjkz5mvzhrfPvUFr",
        text: "I recently got my Cane Corso from Medieval Cane Corso Kennel, and I couldn't be happier with the experience. Robin was knowledgeable, honest, and clearly passionate about the breed. The entire process was smooth, and you can tell the dogs are raised with care and strong standards. My pup is healthy, well-tempered, and absolutely stunning. Highly recommend to anyone looking for a quality Cane Corso."
      },
      {
        name: "Michael Avery",
        rating: 5,
        source: "Google Review",
        verified: true,
        url: "https://share.google/LI3XhpAbV3Uugo6TO",
        text: "We are more than pleased with our puppy from Robyn. From the start he was friendly, knowledgeable and cares deeply for the breed. Our new family member is healthy, confident and a great addition. I would highly recommend Medieval Cane Corsos."
      },
      {
        name: "Georgia Stuart",
        rating: 5,
        source: "Google Review",
        verified: true,
        url: "https://share.google/LTFzSXJclY3TzUuVC",
        text: "We couldn't be happier with our experience! Medieval Cane Corso is truly passionate about their dogs and it shows in every detail — from their deep knowledge of the breed to the care they provide for each pup. My Cane Corso is healthy, confident, and has an amazing temperament. Communication throughout the process was excellent — they answered all my questions, sent regular updates, and made sure I was fully prepared to welcome my new family member. If you're looking for a responsible, professional, and truly dedicated breeder, I highly recommend Medieval Cane Corso!"
      },
      {
        name: "Corey Weiss",
        rating: 5,
        source: "Google Review",
        verified: true,
        url: "https://share.google/55eOS8zHHpCEJCwfk",
        text: "We had an amazing experience with Medieval Cane Corsos. Robbie is very passionate, and knowledgeable about the breed, he is committed to moving forward with the breed to enhance the already spectacular genetics. From the first meet to pickup date, he was very transparent, and we felt immediately we could trust him."
      },
      {
        name: "P Oppal",
        rating: 5,
        source: "Google Review",
        verified: true,
        url: "",
        text: "We got our female puppy through Medieval Cane Corso. From the moment we contacted Robby he has been nothing but helpful and informative with all of our questions. We were also able to view the parents which was reassuring. We have had our puppy for a little over a month and we have noticed her protective nature, her love for our family (she is very affectionate) and her ability to learn quickly. When we take her out we get many compliments on her cuteness and body structure. I didn't know what to expect going with a Cane Corso, however I am happy we did and Robby was able to provide us a wonderful addition to our family. I would recommend him to friends and family."
      },
      {
        name: "Ian",
        rating: 5,
        source: "Google Review",
        verified: true,
        url: "",
        text: "My experience with Medieval Cane Corso's has been absolutely exceptional from start to finish. I first met the breeder back in May, before the puppies were even conceived, and decided to place a deposit right away — that's how confident I felt after speaking with him. From that moment on, he was incredibly consistent, professional, and responsive, always taking the time to answer any questions or concerns I had. Throughout the entire process, he kept me updated every step of the way, sending photos, updates, and sharing information about the litter and parents. The dedication and care he puts into his dogs really shows — both of my puppy's parents are ICCF registered and OFA health certified, exactly what you'd want in a responsible and ethical Cane Corso breeder. My puppy is nothing short of perfect — healthy, confident, and with amazing temperament and structure. You can tell he was raised with love, care, and proper socialization from day one."
      },
      {
        name: "Muskan Nijjar",
        rating: 5,
        source: "Google Review",
        verified: true,
        url: "",
        text: "We are so grateful to have found Medieval Cane Corsos! From the very beginning, Robin was kind, honest, and amazing with communication, always keeping us updated throughout the whole process, even before the puppies were born. You can truly tell he cares deeply about the dogs and puts thought, time, and care into everything. The puppies are clearly raised properly, with so much love, attention, and a focus on health and temperament. Even after bringing our puppy home, he has continued to be responsive and helpful with any questions we've had. It's rare to meet breeders who are this genuine, knowledgeable, and passionate about what they do."
      }
    ]
  },

  faqs: [
    {
      q: "What is your application process?",
      a: "We ask interested families to submit our puppy application so we can learn about your home, experience, and what you're looking for in a Cane Corso. From there, we follow up to discuss your application, answer any questions, and walk through next steps and timing together."
    },
    {
      q: "Do you require a deposit to reserve a puppy?",
      a: "Yes. A $1,000 non-refundable deposit is required to reserve a puppy. The deposit is applied toward the puppy's total purchase price."
    },
    {
      q: "What health testing do you perform on your breeding dogs?",
      a: "Health testing is a foundational priority in our program. Our stud, Sir Shadow, has completed OFA evaluations for hips (Good) and elbows (Normal), along with a cardiac exam (Normal/Clear). We are actively working to expand health testing across our dogs and future generations as our program develops."
    },
    {
      q: "Will my puppy be vaccinated and vet-checked before I bring them home?",
      a: "Puppies are raised with attentive care in our home. For specific vaccination schedules, deworming protocols, and veterinary records for a given litter, please ask us directly — we're happy to walk you through exactly what's been done before placement."
    },
    {
      q: "How does puppy pickup or transportation work?",
      a: "Families may arrange local pickup in Surrey, British Columbia. For families located farther away, transportation may also be arranged by air with a dedicated flight nanny. Availability and transportation costs will depend on the destination and travel requirements. Please contact us to discuss the available options."
    },
    {
      q: "How should I prepare for a Cane Corso puppy?",
      a: "Cane Corsos are large, intelligent, and powerful dogs that thrive with firm, fair leadership, early and ongoing socialization, and consistent training. Before bringing one home, we recommend researching the breed thoroughly, puppy-proofing your home, securing a fenced yard where possible, and lining up a trainer or training plan in advance."
    },
    {
      q: "Do you offer support with training and socialization?",
      a: "We remain available as a resource for our puppy families from your first inquiry through life with your dog, and we're glad to share guidance on socialization and training as your puppy grows."
    },
    {
      q: "Is a Cane Corso right for every household?",
      a: "No. The Cane Corso is not a breed suited for those looking for an “easy” dog, frequent off-leash freedom in uncontrolled environments, or a guardian without daily involvement. This breed thrives in experienced homes that understand leadership, engagement, structure, and long-term responsibility. If you're unsure whether a Cane Corso fits your lifestyle, we encourage you to reach out and ask questions before applying."
    }
  ],

  gallery: [
    { file: "images/gallery/gallery-adult-indoor-couch.jpg", alt: "Cane Corso relaxing on a couch indoors", category: "adults" },
    { file: "images/gallery/gallery-adult-on-boat.jpg", alt: "Cane Corso sitting on a boat on a Lower Mainland lake", category: "adults" },
    { file: "images/gallery/gallery-adult-treadmill-training.jpg", alt: "Cane Corso on a conditioning platform during training", category: "behind-the-scenes" },
    { file: "images/gallery/gallery-two-dogs-yard.jpg", alt: "Two Cane Corsos together in a grassy yard", category: "adults" },
    { file: "images/gallery/gallery-puppy-concrete.jpg", alt: "Cane Corso puppy exploring outdoors", category: "puppies" },
    { file: "images/gallery/gallery-puppy-indoor-candid.jpg", alt: "Cane Corso puppy resting indoors", category: "puppies" },
    { file: "images/gallery/gallery-puppy-hardwood-floor.jpg", alt: "Cane Corso puppy sitting on a hardwood floor", category: "puppies" },
    { file: "images/gallery/gallery-puppy-window-cot.jpg", alt: "Cane Corso puppy resting on an elevated dog cot by a window", category: "puppies" },
    { file: "images/gallery/gallery-puppy-car.jpg", alt: "Cane Corso puppy sitting in a car", category: "puppies" },
    { file: "images/gallery/gallery-puppy-running-grass.jpg", alt: "Cane Corso puppy running across a grassy yard", category: "puppies" },
    { file: "images/gallery/gallery-puppy-wildflowers.jpg", alt: "Cane Corso puppy exploring a field of wildflowers", category: "puppies" },
    { file: "images/gallery/gallery-puppy-tile-floor.jpg", alt: "Cane Corso puppy sitting on a tile floor indoors", category: "puppies" },
    { file: "images/gallery/gallery-puppy-blue-toy.jpg", alt: "Cane Corso puppy playing with a blue toy outdoors", category: "puppies" },
    { file: "images/gallery/gallery-puppies-playing-rope.jpg", alt: "Two Cane Corso puppies playing with a rope toy", category: "puppies" },
    { file: "images/gallery/gallery-puppy-outdoor-pen.jpg", alt: "Cane Corso puppy in an outdoor play pen", category: "puppies" },
    { file: "images/gallery/gallery-puppy-blue-ball.jpg", alt: "Cane Corso puppy with a blue ball on grass", category: "puppies" },
    { file: "images/gallery/gallery-puppy-indoor-bed.jpg", alt: "Cane Corso puppy resting on an indoor dog bed", category: "puppies" },
    { file: "images/gallery/gallery-puppy-porch.jpg", alt: "Cane Corso puppy on a porch", category: "puppies" },
    { file: "images/gallery/gallery-puppy-greenery.jpg", alt: "Cane Corso puppy among garden greenery", category: "puppies" },
    { file: "images/gallery/gallery-puppy-walk.jpg", alt: "Cane Corso puppy on a walk", category: "puppies" },
    { file: "images/gallery/gallery-puppy-leash-walk.jpg", alt: "Cane Corso puppy walking on a leash", category: "puppies" },
    { file: "images/gallery/gallery-family-bunny-ears-01.jpg", alt: "Cane Corso puppy with a playful bunny-ears expression", category: "puppies" },
    { file: "images/gallery/gallery-puppy-car-seat.jpg", alt: "Cane Corso puppy sitting in a car seat", category: "puppies" },
    { file: "images/gallery/gallery-puppy-orchard-path.jpg", alt: "Cane Corso puppy on a dirt path near an orchard", category: "puppies" },
    { file: "images/gallery/gallery-puppy-pink-blanket.jpg", alt: "Cane Corso puppy wrapped in a pink blanket", category: "puppies" },
    { file: "images/puppies/litter-puppy-grey-01.jpg", alt: "Grey Cane Corso puppy standing on grass", category: "puppies" },
    { file: "images/puppies/litter-puppy-lightgrey-02.jpg", alt: "Light grey Cane Corso puppy standing on grass", category: "puppies" },
    { file: "images/puppies/litter-puppy-black-03.jpg", alt: "Black Cane Corso puppy standing on grass", category: "puppies" },
    { file: "images/puppies/newborn-puppy-whelping-box.jpg", alt: "Newborn Cane Corso puppy in the whelping area", category: "behind-the-scenes" },
    { file: "images/puppies/puppy-cozy-blanket.jpg", alt: "Cane Corso puppy resting under a blanket", category: "behind-the-scenes" },
    { file: "images/puppies/puppy-playpen-toys.jpg", alt: "Cane Corso puppy in an indoor play area", category: "behind-the-scenes" },
    { file: "images/puppies/puppy-held-blanket.jpg", alt: "Cane Corso puppy being held gently", category: "behind-the-scenes" },
    { file: "images/puppies/puppy-sleeping-fireplace.jpg", alt: "Cane Corso puppy sleeping by a fireplace", category: "behind-the-scenes" },
    { file: "images/puppies/puppy-pumpkin-seasonal.jpg", alt: "Cane Corso puppy in a pumpkin, seasonal photo", category: "puppies" },
    { file: "images/dogs/sir-shadow-01-standing-hedge.jpg", alt: "Sir Shadow, Medieval Cane Corso's foundation sire, standing beside a cedar hedge", category: "breeding-dogs" },
    { file: "images/dogs/sir-shadow-02-alert-hedge.jpg", alt: "Sir Shadow, Medieval Cane Corso's foundation sire, standing alert near a cedar hedge", category: "breeding-dogs" },
    { file: "images/dogs/sir-shadow-03-lying-mossy-tree.jpg", alt: "Sir Shadow, Medieval Cane Corso's foundation sire, lying on a gravel path beside a large mossy tree", category: "breeding-dogs" },
    { file: "images/dogs/elizabeth-01-autumn-leaves.jpg", alt: "Americana's Countess Elizabeth, one of our breeding dogs, sitting among autumn leaves", category: "breeding-dogs" },
    { file: "images/dogs/elizabeth-02-lying-grass.jpg", alt: "Americana's Countess Elizabeth, one of our breeding dogs, lying in grass near a fence line", category: "breeding-dogs" },
    { file: "images/dogs/luna-01-lying-field.jpg", alt: "Medieval's Luna standing outdoors in a private yard", category: "breeding-dogs" },
    { file: "images/dogs/luna-02-red-leash.jpg", alt: "Medieval's Luna standing outdoors in a private yard", category: "breeding-dogs" },
    { file: "images/dogs/luna-03-grass.jpg", alt: "Medieval's Luna standing outdoors in a private yard", category: "breeding-dogs" }
  ]
};
